import { useEffect, useRef } from "react";
import "./CountriesCarousel.css";

/**
 * Countries Carousel
 * Rueda 3D de media vuelta con los países donde Nexus tiene colaboraciones.
 * Se ubica entre el Hero y Services: el arco sube y se mete en el Hero.
 * Los valores del efecto (tamaño, curvatura, velocidad) están en CountriesCarousel.css.
 */

type Country = { code: string; name: string };

/** Para sumar o quitar países, editar solo esta lista. Las banderas van en /public/flags. */
const COUNTRIES: Country[] = [
  { code: "ar", name: "Argentina" },
  { code: "mx", name: "México" },
  { code: "bo", name: "Bolivia" },
  { code: "py", name: "Paraguay" },
  { code: "uy", name: "Uruguay" },
  { code: "es", name: "España" },
  { code: "pa", name: "Panamá" },
];

/**
 * El set se coloca dos veces sobre la rueda. Las dos copias de un mismo país quedan
 * separadas exactamente 180°, así que cuando una está al frente la otra está atrás,
 * invisible: la rueda se ve llena y nunca se repite una bandera en pantalla.
 */
const SLOTS: Country[] = [...COUNTRIES, ...COUNTRIES];

export default function CountriesCarousel() {
  const rootRef = useRef<HTMLDivElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const wheel = wheelRef.current;
    if (!root || !wheel) return;

    const items = Array.from(wheel.children) as HTMLElement[];
    if (items.length === 0) return;

    const readVar = (name: string, fallback: number) => {
      const value = Number.parseFloat(getComputedStyle(root).getPropertyValue(name));
      return Number.isFinite(value) ? value : fallback;
    };

    let arc = 150;
    let speed = 0.08;
    let turn = 0.7;
    let depth = 0.55;
    let radius = 400;

    const readSettings = () => {
      arc = readVar("--nx-arc", 150);
      speed = readVar("--nx-speed", 0.08);
      turn = readVar("--nx-turn", 0.7);
      depth = readVar("--nx-depth", 0.55);
      radius = Math.max(140, root.clientWidth * readVar("--nx-radius-factor", 0.48));
    };
    readSettings();

    const step = 360 / items.length;
    let angle = 0;
    let paused = false;
    let dragging = false;
    let lastX = 0;
    let velocity = 0;
    let frameId = 0;

    const render = () => {
      if (!paused && !dragging) angle += speed;
      if (dragging || Math.abs(velocity) > 0.01) {
        angle += velocity;
        velocity *= 0.93;
      }

      for (let i = 0; i < items.length; i++) {
        // ángulo normalizado a [-180, 180]: 0 = al frente, ±90 = de costado
        const a = ((((angle + i * step) % 360) + 540) % 360) - 180;
        const rad = (a * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        const x = sin * radius;
        const z = (cos - 1) * radius * depth;
        const y = Math.pow(1 - cos, 0.7) * arc; // centro arriba, costados abajo
        const opacity = Math.pow(Math.max(0, (cos - 0.1) / 0.9), 0.85);

        const el = items[i];
        el.style.transform =
          `translate(-50%, -50%) translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, ${z.toFixed(1)}px)` +
          ` rotateY(${(a * turn).toFixed(1)}deg)`;
        el.style.opacity = opacity < 0.015 ? "0" : opacity.toFixed(3);
        el.style.visibility = opacity < 0.015 ? "hidden" : "visible";
        el.style.zIndex = String(Math.round(cos * 100) + 120);
      }

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    const onResize = () => readSettings();
    const onPointerOver = () => {
      paused = true;
    };
    const onPointerOut = () => {
      paused = false;
    };
    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      velocity = 0;
      const target = e.target as HTMLElement;
      if (target.setPointerCapture) target.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      velocity = (e.clientX - lastX) * 0.16;
      lastX = e.clientX;
    };
    const onPointerUp = () => {
      dragging = false;
    };

    window.addEventListener("resize", onResize);
    wheel.addEventListener("pointerover", onPointerOver);
    wheel.addEventListener("pointerout", onPointerOut);
    wheel.addEventListener("pointerdown", onPointerDown);
    wheel.addEventListener("pointermove", onPointerMove);
    wheel.addEventListener("pointerup", onPointerUp);
    wheel.addEventListener("pointercancel", onPointerUp);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      wheel.removeEventListener("pointerover", onPointerOver);
      wheel.removeEventListener("pointerout", onPointerOut);
      wheel.removeEventListener("pointerdown", onPointerDown);
      wheel.removeEventListener("pointermove", onPointerMove);
      wheel.removeEventListener("pointerup", onPointerUp);
      wheel.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <div className="nx-countries" ref={rootRef} aria-label="Países con los que colaboramos">
      <div className="nx-countries__stage">
        <div className="nx-countries__wheel" ref={wheelRef}>
          {SLOTS.map((country, index) => (
            <div className="nx-countries__item" key={`${country.code}-${index}`} title={country.name}>
              <span className="nx-countries__flag">
                <img src={`/flags/${country.code}.svg`} alt={country.name} draggable={false} />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
