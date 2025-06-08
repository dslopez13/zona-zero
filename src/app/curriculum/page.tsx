import { UnitCard, type Unit } from "@/components/course/UnitCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Mock data - in a real app, this would come from a database or API
const curriculumData: Unit[] = [
  {
    id: "unit-1",
    title: "Fundamentos de Juego",
    iconType: "brain",
    summary:
      "Explora los principios fundamentales del juego en el fútbol, incluyendo conceptos como espacio, tiempo, relación entre jugadores y toma de decisiones.",
    materials: [
      "Guía PDF: Fundamentos tácticos del juego",
      "Video: Fundamentos del juego en el fútbol (YouTube)",
      "Lectura: Construcción metodológica del modelo de juego – Daniel Guindos (2018)",
      "Extractos del libro: Conceptos tácticos de ataque en el fútbol – Pedro Noguera",
    ],
    activities: [
      "Cuestionario 1: Conceptos básicos del juego",
      "Análisis de video: Principios de juego aplicados en partidos reales",
      'Discusión en foro: ¿Qué significa "jugar bien" en fútbol?',
    ],
  },
  {
    id: "unit-2",
    title: "Fase Ofensiva – Crear, Progresar y Finalizar",
    iconType: "swords",
    summary:
      "Aprende a identificar oportunidades ofensivas, crear superioridades y finalizar jugadas con eficacia en el contexto del fútbol.",
    materials: [
      "Módulo interactivo: Patrones ofensivos",
      "Análisis en video: Jugadas ofensivas destacadas",
      "Lectura: Conceptos tácticos de ataque – Pedro Noguera",
      "Lista de verificación: Evaluación previa al ataque",
    ],
    activities: [
      "Simulación táctica: Escenarios de ataque",
      "Evaluación entre pares: Plan ofensivo propuesto",
      "Taller en vivo: Preguntas y respuestas con un experto",
    ],
  },
  {
    id: "unit-3",
    title: "Fase Defensiva – Orden, Cobertura y Recuperación",
    iconType: "shieldcheck",
    summary:
      "Domina los principios defensivos en el fútbol, como el orden táctico, la cobertura colectiva y la recuperación del balón en diferentes zonas del campo.",
    materials: [
      "Guía: Principios defensivos fundamentales",
      "Estudio de casos: Defensas históricas exitosas",
      "Lectura: Conceptos defensivos aplicados al fútbol – Pedro Noguera",
      "Escenarios de juego: Simulación de transiciones defensivas",
    ],
    activities: [
      "Cuestionario: Principios de defensa",
      "Debate en foro: Defensa proactiva vs. reactiva",
      "Ejercicio práctico: Organización y cobertura defensiva",
      "Análisis de video: Recuperación de balón en distintas zonas",
    ],
  },
  {
    id: "unit-4",
    title: "Transiciones – De la Defensa al Ataque y Viceversa",
    iconType: "arrowsrightleft",
    summary:
      "Comprende y aplica los principios fundamentales de las transiciones ofensivas y defensivas, mejorando la velocidad y eficacia en los cambios de fase.",
    materials: [
      "Lectura: Conceptos tácticos de transición – Pedro Noguera",
      "Análisis en video: Transiciones exitosas en partidos profesionales",
      "Guía visual: Tipos de transiciones en fútbol",
    ],
    activities: [
      "Simulación táctica: Transiciones rápidas",
      "Mapa mental: Principios clave de cada fase",
      "Ejercicio práctico: Organización tras pérdida y recuperación",
      "Foro: ¿Cuándo iniciar una transición ofensiva?",
    ],
  },
  {
    id: "unit-5",
    title: "Adaptación e Improvisación en el Juego",
    iconType: "activity",
    summary:
      "Desarrolla la capacidad para adaptarte a situaciones imprevistas dentro del campo y toma decisiones acertadas bajo presión.",
    materials: [
      "Marco teórico: Toma de decisiones adaptativa en el fútbol",
      "Videos: Jugadas improvisadas que cambiaron partidos",
      "Cuaderno de planificación de escenarios",
    ],
    activities: [
      "Ejercicios de improvisación táctica",
      "Análisis de decisiones en tiempo real",
      "Diagrama de adaptación frente a distintas formaciones",
      "Proyecto: Estrategia adaptativa frente a un rival sorpresa",
    ],
  },
  {
    id: "unit-6",
    title: "Sinergia de Equipo y Liderazgo",
    iconType: "users",
    summary:
      "Aprende a liderar desde el juego, fomentando la cohesión, la comunicación efectiva y la inteligencia colectiva dentro del equipo.",
    materials: [
      "Guía: Formación de equipos cohesionados en fútbol",
      "Entrevistas: Capitanes exitosos y su rol táctico-emocional",
      "Protocolo de comunicación en la cancha",
    ],
    activities: [
      "Dinámicas de confianza y comunicación (presencial/virtual)",
      "Simulación de liderazgo en partidos clave",
      "Estudio de caso: Equipos campeones y su modelo de liderazgo",
      "Taller: Diseño de roles y liderazgo situacional",
    ],
  },
];

export default function CurriculumPage() {
  // Basic search functionality would require client component and state
  // For a server component, this is a static display
  return (
    <div className="space-y-8">
      <section className="text-center py-8 bg-card rounded-lg shadow-xl">
        <h1 className="text-4xl font-headline font-bold text-primary mb-2">
          Curriculum
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Explora la lista completa de módulos diseñados para convertirte en un
          Game Master de Zona Cero.
        </p>
      </section>

      {/* Search bar - would need client component for interactivity
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search curriculum..." className="pl-10" />
      </div> 
      */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
        {curriculumData.map((unit) => (
          <UnitCard key={unit.id} unit={unit} />
        ))}
      </div>
    </div>
  );
}
