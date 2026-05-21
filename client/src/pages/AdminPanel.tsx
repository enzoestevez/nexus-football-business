import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Plus, Trash2, Edit2, LogOut, Users, Upload, X } from "lucide-react";

/**
 * Admin Panel Page
 * Design: Minimalismo Legal Corporativo
 * - Panel para gestionar jugadores y directores técnicos
 * - Agregar, editar, eliminar y subir fotos
 */

interface Player {
  id: string;
  name: string;
  age: number;
  position: string;
  club: string;
  type: "player" | "coach";
  photo?: string; // Base64 encoded image
}

const DEFAULT_PLAYERS: Player[] = [
  { id: "1", name: "Juan Carlos Martínez", age: 24, position: "Delantero", club: "Central Córdoba", type: "player" },
  { id: "2", name: "Santiago López", age: 28, position: "Centrocampista", club: "Mitre (Santiago del Estero)", type: "player" },
  { id: "3", name: "Roberto Fernández", age: 26, position: "Defensa", club: "Güemes", type: "player" },
  { id: "4", name: "Mateo García", age: 22, position: "Extremo", club: "Estudiantes", type: "player" },
  { id: "5", name: "Diego Rodríguez", age: 31, position: "Entrenador", club: "Boca Juniors", type: "coach" },
  { id: "6", name: "Fernando Álvarez", age: 29, position: "Director Técnico", club: "River Plate", type: "coach" },
];

export default function AdminPanel() {
  const [, navigate] = useLocation();
  const [players, setPlayers] = useState<Player[]>(DEFAULT_PLAYERS);
  const [formData, setFormData] = useState<Partial<Player>>({ type: "player" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"player" | "coach">("player");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  // Verificar autenticación
  useEffect(() => {
    const auth = localStorage.getItem("adminAuth");
    if (!auth) {
      navigate("/admin-login");
    }
  }, [navigate]);

  // Cargar datos del localStorage
  useEffect(() => {
    const saved = localStorage.getItem("nexus_players");
    if (saved) {
      try {
        setPlayers(JSON.parse(saved));
      } catch (e) {
        console.error("Error loading players:", e);
      }
    }
  }, []);

  // Guardar datos en localStorage
  const savePlayers = (updatedPlayers: Player[]) => {
    setPlayers(updatedPlayers);
    localStorage.setItem("nexus_players", JSON.stringify(updatedPlayers));
  };

  // Manejar subida de foto
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setPhotoPreview(base64);
        setFormData({ ...formData, photo: base64 });
      };
      reader.readAsDataURL(file);
    }
  };

  // Agregar o editar
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.age || !formData.position || !formData.club || !formData.type) {
      alert("Por favor completa todos los campos");
      return;
    }

    if (editingId) {
      const updated = players.map((p) =>
        p.id === editingId ? { ...p, ...formData } : p
      ) as Player[];
      savePlayers(updated);
      setEditingId(null);
    } else {
      const newPlayer: Player = {
        id: Date.now().toString(),
        name: formData.name || "",
        age: formData.age || 0,
        position: formData.position || "",
        club: formData.club || "",
        type: formData.type || "player",
        photo: formData.photo,
      };
      savePlayers([...players, newPlayer]);
    }

    setFormData({ type: "player" });
    setPhotoPreview(null);
  };

  // Editar
  const handleEdit = (player: Player) => {
    setFormData(player);
    setPhotoPreview(player.photo || null);
    setEditingId(player.id);
    setActiveTab(player.type);
  };

  // Eliminar
  const handleDelete = (id: string) => {
    if (confirm("¿Estás seguro de que deseas eliminar este registro?")) {
      savePlayers(players.filter((p) => p.id !== id));
    }
  };

  // Cancelar edición
  const handleCancel = () => {
    setEditingId(null);
    setFormData({ type: "player" });
    setPhotoPreview(null);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/");
  };

  const filteredPlayers = players.filter((p) => p.type === activeTab);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Panel Administrativo</h1>
            <p className="text-primary-foreground/80 text-sm">Gestiona jugadores y directores técnicos</p>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="bg-white text-primary hover:bg-white/90"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar Sesión
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-8 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form */}
          <div className="md:col-span-1">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">
                {editingId ? "Editar" : "Agregar Nuevo"}
              </h2>

              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => {
                    setActiveTab("player");
                    setFormData({ ...formData, type: "player" });
                  }}
                  className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors ${
                    formData.type === "player"
                      ? "bg-primary text-white"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  Jugador
                </button>
                <button
                  onClick={() => {
                    setActiveTab("coach");
                    setFormData({ ...formData, type: "coach" });
                  }}
                  className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors ${
                    formData.type === "coach"
                      ? "bg-primary text-white"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  Director
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Photo Upload */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Foto de Perfil</label>
                  <div className="relative">
                    {photoPreview ? (
                      <div className="relative w-full h-32 bg-secondary rounded-lg overflow-hidden">
                        <img
                          src={photoPreview}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            setPhotoPreview(null);
                            setFormData({ ...formData, photo: undefined });
                          }}
                          className="absolute top-1 right-1 p-1 bg-destructive text-white rounded-full hover:bg-destructive/90"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <label className="flex items-center justify-center w-full h-32 bg-secondary border-2 border-dashed border-border rounded-lg cursor-pointer hover:bg-secondary/80 transition-colors">
                        <div className="flex flex-col items-center justify-center">
                          <Upload className="w-6 h-6 text-muted-foreground mb-2" />
                          <span className="text-sm text-muted-foreground">Subir foto</span>
                        </div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                <input
                  type="text"
                  placeholder="Nombre y Apellido"
                  value={formData.name || ""}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
                <input
                  type="number"
                  placeholder="Edad"
                  value={formData.age || ""}
                  onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) })}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
                <input
                  type="text"
                  placeholder={formData.type === "player" ? "Posición (ej: Delantero)" : "Especialidad (ej: Entrenador)"}
                  value={formData.position || ""}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
                <input
                  type="text"
                  placeholder="Club"
                  value={formData.club || ""}
                  onChange={(e) => setFormData({ ...formData, club: e.target.value })}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />

                <div className="flex gap-2">
                  <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                    <Plus className="w-4 h-4 mr-2" />
                    {editingId ? "Actualizar" : "Agregar"}
                  </Button>
                  {editingId && (
                    <Button
                      type="button"
                      onClick={handleCancel}
                      variant="outline"
                    >
                      Cancelar
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>

          {/* List */}
          <div className="md:col-span-2">
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Users className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">
                  {activeTab === "player" ? "Jugadores" : "Directores Técnicos"} ({filteredPlayers.length})
                </h2>
              </div>

              {filteredPlayers.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No hay {activeTab === "player" ? "jugadores" : "directores técnicos"} registrados
                </p>
              ) : (
                <div className="space-y-3">
                  {filteredPlayers.map((player) => (
                    <div
                      key={player.id}
                      className="flex items-center justify-between p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1">
                        {player.photo ? (
                          <img
                            src={player.photo}
                            alt={player.name}
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Users className="w-6 h-6 text-primary" />
                          </div>
                        )}
                        <div>
                          <h3 className="font-semibold text-foreground">{player.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {player.age} años • {player.position} • {player.club}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(player)}
                          className="p-2 hover:bg-primary/10 rounded-lg transition-colors"
                          title="Editar"
                        >
                          <Edit2 className="w-4 h-4 text-primary" />
                        </button>
                        <button
                          onClick={() => handleDelete(player.id)}
                          className="p-2 hover:bg-destructive/10 rounded-lg transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
