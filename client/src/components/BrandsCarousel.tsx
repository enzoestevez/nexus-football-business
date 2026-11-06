import "./BrandsCarousel.css";

/**
 * Brands Carousel
 * Cinta infinita con las marcas que acompañan a Nexus. Va al final, antes del Footer.
 * Los logos viven en /public/brands.
 */

type Brand = {
  name: string;
  logo: string;
  /** altura en px: se ajusta por marca para que todas pesen parejo a la vista */
  height: number;
  /** opcional: si se completa, el logo se vuelve un enlace */
  url?: string;
};

const BRANDS: Brand[] = [
  { name: "Lyon", logo: "/brands/lyon.png", height: 62 },
  { name: "Válido", logo: "/brands/valido.png", height: 58 },
  { name: "Valle de La Puerta", logo: "/brands/valle-de-la-puerta.png", height: 46 },
  { name: "Terra Andina", logo: "/brands/terra-andina.png", height: 62 },
];

/** false = cinta sin título */
const SHOW_TITLE = true;
/** true = logos en gris que toman color al pasar el mouse */
const GRAYSCALE = false;
/** repeticiones por mitad: la pista tiene que ser más ancha que la pantalla */
const COPIES = 4;

export default function BrandsCarousel() {
  const half = Array.from({ length: COPIES }, () => BRANDS).flat();
  const loop = [...half, ...half];

  return (
    <section
      className={GRAYSCALE ? "nx-brands nx-brands--gray" : "nx-brands"}
      aria-label="Marcas que nos acompañan"
    >
      {SHOW_TITLE && <p className="nx-brands__title">Marcas que nos acompañan</p>}

      <div className="nx-brands__viewport">
        <div className="nx-brands__track">
          {loop.map((brand, index) => {
            const logo = (
              <img
                src={brand.logo}
                alt={brand.name}
                style={{ height: `${brand.height}px` }}
                draggable={false}
                loading="lazy"
              />
            );

            return (
              <div
                className="nx-brands__item"
                key={`${brand.name}-${index}`}
                title={brand.name}
                aria-hidden={index >= half.length}
              >
                {brand.url ? (
                  <a href={brand.url} target="_blank" rel="noopener noreferrer">
                    {logo}
                  </a>
                ) : (
                  logo
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
