import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Trophy, Filter, X } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Players Page
 * Design: Minimalismo Legal Corporativo
 * - Galería completa de jugadores y directores técnicos
 * - Tarjetas con información detallada y fotos
 * - Filtros por posición/especialidad y club
 * - Sincroniza datos con localStorage (admin panel)
 */

interface Player {
  id: string;
  name: string;
  age: number;
  club: string;
  position?: string;
  photo?: string;
  type: "player" | "coach";
}

const DEFAULT_PLAYERS: Player[] = [
  {
    id: "1",
    name: "Juan Carlos Martínez",
    age: 24,
    club: "Central Córdoba",
    position: "Delantero",
    type: "player",
  },
  {
    id: "2",
    name: "Santiago López",
    age: 28,
    club: "Mitre (Santiago del Estero)",
    position: "Centrocampista",
    type: "player",
  },
  {
    id: "3",
    name: "Roberto Fernández",
    age: 26,
    club: "Güemes",
    position: "Defensa",
    type: "player",
  },
  {
    id: "4",
    name: "Diego Rodríguez",
    age: 31,
    club: "Boca Juniors",
    position: "Entrenador",
    type: "coach",
  },
  {
    id: "5",
    name: "Mateo García",
    age: 22,
    club: "Estudiantes",
    position: "Extremo",
    type: "player",
  },
  {
    id: "6",
    name: "Fernando Álvarez",
    age: 29,
    club: "River Plate",
    position: "Director Técnico",
    type: "coach",
  },
];

export default function Players() {
  const [players, setPlayers] = useState<Player[]>(DEFAULT_PLAYERS);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [selectedClub, setSelectedClub] = useState<string | null>(null);

  // Cargar datos del localStorage (actualizados por admin panel)
  useEffect(() => {
    const saved = localStorage.getItem("nexus_players");
    if (saved) {
      try {
        setPlayers(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading players:", e);
        setPlayers(DEFAULT_PLAYERS);
      }
    }
  }, []);

  // Scroll al principio cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const playersList = players.filter((p) => p.type === "player");
  const coachesList = players.filter((p) => p.type === "coach");

  // Obtener posiciones únicas
  const uniquePositions = Array.from(
    new Set(playersList.map((p) => p.position).filter((p): p is string => Boolean(p)))
  );

  // Obtener clubes únicos
  const uniqueClubs = Array.from(
    new Set(players.map((p) => p.club).filter((p): p is string => Boolean(p)))
  );

  // Filtrar jugadores
  const filteredPlayers = playersList.filter((p) => {
    if (selectedPosition && p.position !== selectedPosition) return false;
    if (selectedClub && p.club !== selectedClub) return false;
    return true;
  });

  // Filtrar directores
  const filteredCoaches = coachesList.filter((c) => {
    if (selectedClub && c.club !== selectedClub) return false;
    return true;
  });

  const hasFilters = selectedPosition || selectedClub;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <Button variant="ghost" className="text-white mb-6 hover:bg-white/20">
              ← Volver al Inicio
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestro Portafolio de Jugadores y Directores Técnicos
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Conoce a los futbolistas y directores técnicos que representamos. 
            Cada uno ha sido evaluado bajo nuestros rigurosos estándares de calidad.
          </p>
        </div>
      </header>

      {/* Players Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Jugadores */}
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Futbolistas
                </h2>
              </div>

              {/* Filters */}
              <div className="flex gap-2 flex-wrap">
                {/* Position Filter */}
                <div className="relative group">
                  <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium">
                    <Filter className="w-4 h-4" />
                    <span>Posición</span>
                  </button>
                  <div className="absolute right-0 mt-1 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10">
                    <button
                      onClick={() => setSelectedPosition(null)}
                      className="w-full text-left px-4 py-2 hover:bg-secondary text-sm"
                    >
                      Todas las posiciones
                    </button>
                    {uniquePositions.map((pos) => (
                      <button
                        key={pos}
                        onClick={() => setSelectedPosition(pos)}
                        className={`w-full text-left px-4 py-2 hover:bg-secondary text-sm ${
                          selectedPosition === pos ? "bg-primary/10 text-primary font-semibold" : ""
                        }`}
                      >
                        {pos}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Club Filter */}
                <div className="relative group">
                  <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium">
                    <Filter className="w-4 h-4" />
                    <span>Club</span>
                  </button>
                  <div className="absolute right-0 mt-1 w-48 bg-white border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 max-h-64 overflow-y-auto">
                    <button
                      onClick={() => setSelectedClub(null)}
                      className="w-full text-left px-4 py-2 hover:bg-secondary text-sm"
                    >
                      Todos los clubes
                    </button>
                    {uniqueClubs.map((club) => (
                      <button
                        key={club}
                        onClick={() => setSelectedClub(club)}
                        className={`w-full text-left px-4 py-2 hover:bg-secondary text-sm ${
                          selectedClub === club ? "bg-primary/10 text-primary font-semibold" : ""
                        }`}
                      >
                        {club}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {hasFilters && (
                  <button
                    onClick={() => {
                      setSelectedPosition(null);
                      setSelectedClub(null);
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-destructive/10 hover:bg-destructive/20 transition-colors text-sm font-medium text-destructive"
                  >
                    <X className="w-4 h-4" />
                    <span>Limpiar</span>
                  </button>
                )}
              </div>
            </div>

            {filteredPlayers.length === 0 ? (
              <p className="text-muted-foreground text-center py-12">
                {hasFilters
                  ? "No hay jugadores que coincidan con los filtros seleccionados"
                  : "No hay jugadores registrados en este momento"}
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPlayers.map((player) => (
                  <Card
                    key={player.id}
                    className="border border-border overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Player Image */}
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center overflow-hidden">
                      {player.photo ? (
                        <img
                          src={player.photo}
                          alt={player.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Users className="w-16 h-16 text-primary/40" />
                      )}
                    </div>

                    {/* Player Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {player.name}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Edad</p>
                          <p className="font-semibold text-foreground">{player.age} años</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Posición</p>
                          <p className="font-semibold text-foreground">{player.position}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Club Actual</p>
                          <p className="font-semibold text-primary">{player.club}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Coaches Section */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <Trophy className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Directores Técnicos
              </h2>
            </div>

            {filteredCoaches.length === 0 ? (
              <p className="text-muted-foreground text-center py-12">
                {hasFilters
                  ? "No hay directores técnicos que coincidan con los filtros seleccionados"
                  : "No hay directores técnicos registrados en este momento"}
              </p>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCoaches.map((coach) => (
                  <Card
                    key={coach.id}
                    className="border border-border overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    {/* Coach Image */}
                    <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center overflow-hidden">
                      {coach.photo ? (
                        <img
                          src={coach.photo}
                          alt={coach.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <Trophy className="w-16 h-16 text-primary/40" />
                      )}
                    </div>

                    {/* Coach Info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {coach.name}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Edad</p>
                          <p className="font-semibold text-foreground">{coach.age} años</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Especialidad</p>
                          <p className="font-semibold text-foreground">{coach.position}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Club</p>
                          <p className="font-semibold text-primary">{coach.club}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Interesado en Alguno de Nuestros Representados?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contáctanos para obtener más información sobre disponibilidad, 
            términos de transferencia y oportunidades de colaboración.
          </p>
          <Link href="/#contacto">
            <Button className="bg-white text-primary hover:bg-white/90 font-bold py-3 px-8">
              Contactar Ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
