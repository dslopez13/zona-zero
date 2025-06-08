import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SportIcon } from "@/components/shared/SportIcon";
import {
  BookText,
  CheckSquare,
  FileText,
  Video,
  Users2,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Mock data - in a real app, this would come from a database or API
const curriculumData = [
  {
    id: "unit-1",
    title: "Fundamentos de la Estrategia",
    iconType: "brain",
    summary:
      "Comprende los principios fundamentales del pensamiento y la planificación estratégica en diversos contextos del juego.",
    longDescription:
      "Esta unidad introductoria explora la evolución histórica de la estrategia, marcos teóricos clave y su aplicación práctica en el fútbol. Aprenderás a analizar estados del juego, identificar objetivos y formular planes a largo plazo dentro del terreno de juego.",
    materials: [
      "Guía PDF: Principios estratégicos",
      "Videoclase: Historia de la estrategia en el deporte",
      "Lectura: Sun Tzu – El arte de la guerra (fragmentos)",
      "Glosario de términos estratégicos",
    ],
    activities: [
      "Cuestionario 1: Conceptos básicos de estrategia",
      "Análisis de caso: Maestros del ajedrez y su lectura del juego",
      "Foro de discusión: ¿Qué es estrategia en el fútbol?",
      "Ejercicio práctico: Análisis de mapa y posicionamiento",
    ],
    learningObjectives: [
      "Definir conceptos estratégicos fundamentales.",
      "Analizar ejemplos históricos de estrategia.",
      "Aplicar marcos estratégicos básicos a situaciones simples del juego.",
    ],
  },
  {
    id: "unit-2",
    title: "Tácticas Ofensivas",
    iconType: "swords",
    summary:
      "Aprende a identificar oportunidades y ejecutar maniobras ofensivas de forma efectiva.",
    longDescription:
      "Esta unidad se centra en el juego proactivo y ofensivo. Explorarás patrones de ataque, evaluación del riesgo en jugadas agresivas y técnicas para romper defensas rivales. La sincronización y gestión de recursos ofensivos serán temas clave.",
    materials: [
      "Módulo interactivo: Patrones ofensivos",
      "Análisis en video: Jugadas ofensivas memorables",
      "Lista de chequeo: Evaluación previa al ataque",
      "Recurso: Guía de formaciones ofensivas",
    ],
    activities: [
      "Simulación táctica: Escenarios de ataque",
      "Revisión entre pares: Plan de ataque",
      "Taller en vivo: Preguntas a un entrenador experto",
      "Desafío: Tácticas ofensivas en modo blitz",
    ],
    learningObjectives: [
      "Identificar oportunidades ofensivas.",
      "Ejecutar patrones tácticos comunes.",
      "Evaluar riesgos asociados a jugadas agresivas.",
    ],
  },
  {
    id: "unit-3",
    title: "Maniobras Defensivas",
    iconType: "shieldcheck",
    summary:
      "Domina el arte de la defensa, la gestión de recursos y los contraataques.",
    longDescription:
      "La unidad 3 aborda los fundamentos de la defensa individual y colectiva, el posicionamiento, la anticipación y las fases de recuperación. También se analizarán modelos exitosos de defensa y cómo convertir la defensa en ofensiva.",
    materials: [
      "Guía: Estructuras defensivas en fútbol",
      "Estudios de caso: Grandes defensas de equipos históricos",
      "Situaciones de rol: Defensa bajo presión",
      "Checklist: Comunicación y marcaje",
    ],
    activities: [
      "Cuestionario 2: Principios defensivos",
      "Debate: Defensa proactiva vs. reactiva",
      "Ejercicio práctico: Defiende tu zona",
      "Análisis: Errores comunes en la transición defensiva",
    ],
    learningObjectives: [
      "Comprender principios fundamentales de defensa.",
      "Aplicar conceptos de presión, cobertura y anticipación.",
      "Evaluar estructuras defensivas en distintas fases del juego.",
    ],
  },
  {
    id: "unit-4",
    title: "Transiciones – De la Defensa al Ataque y Viceversa",
    iconType: "arrowsrightleft",
    summary:
      "Comprende y aplica los principios clave de las transiciones ofensivas y defensivas.",
    longDescription:
      "En esta unidad se explora cómo ejecutar transiciones efectivas tras pérdida o recuperación del balón. Se profundiza en la importancia del posicionamiento previo, la reacción en segundos y el desequilibrio del rival como oportunidad táctica.",
    materials: [
      "Lectura: Conceptos tácticos de transición",
      "Videoanálisis: Transiciones rápidas en partidos profesionales",
      "Guía visual: Tipos de transiciones en fútbol",
      "Checklists: Activadores de contraataque y repliegue",
    ],
    activities: [
      "Simulación: Fase de transición tras pérdida y recuperación",
      "Mapa mental: Claves de la transición rápida",
      "Ejercicio práctico: Activación inmediata tras robo",
      "Foro: Cuándo y cómo transicionar efectivamente",
    ],
    learningObjectives: [
      "Identificar momentos clave para iniciar transiciones.",
      "Coordinar movimientos en fase ofensiva y defensiva.",
      "Aplicar patrones de transición en situaciones reales.",
    ],
  },
  {
    id: "unit-5",
    title: "Adaptación e Improvisación en el Juego",
    iconType: "activity",
    summary:
      "Desarrolla la capacidad de adaptarte al juego cambiante y tomar decisiones bajo presión.",
    longDescription:
      "Esta unidad desarrolla la capacidad de adaptación táctica frente a nuevos escenarios de juego, tomando decisiones efectivas en tiempo real. También se trabajará la improvisación con base en la lectura rápida de las condiciones del partido.",
    materials: [
      "Marco teórico: Toma de decisiones adaptativa",
      "Videos: Jugadas improvisadas decisivas",
      "Cuaderno de trabajo: Planificación por escenarios",
      "Guía: Reacciones tácticas frente a formaciones desconocidas",
    ],
    activities: [
      "Quizzes dinámicos: Respuesta en situaciones cambiantes",
      "Ejercicios de improvisación táctica",
      "Simulacro: Adaptación frente a nuevo esquema rival",
      "Proyecto final: Presentación de estrategia adaptativa",
    ],
    learningObjectives: [
      "Leer y reaccionar ante escenarios inesperados.",
      "Adaptar planes de juego a tiempo real.",
      "Improvisar soluciones con base en principios tácticos.",
    ],
  },
  {
    id: "unit-6",
    title: "Sinergia de Equipo y Liderazgo",
    iconType: "users",
    summary: "Aprende a liderar y colaborar eficazmente en juegos colectivos.",
    longDescription:
      "La unidad final se centra en el trabajo en equipo, la cohesión grupal y el liderazgo dentro y fuera del campo. Se abordarán protocolos de comunicación, toma de decisiones en grupo y análisis de líderes exitosos.",
    materials: [
      "Guía: Cómo construir cohesión en equipos deportivos",
      "Entrevistas: Capitanes de equipo y liderazgo inspirador",
      "Protocolos: Comunicación y roles dentro del campo",
      "Lectura: Inteligencia emocional aplicada al fútbol",
    ],
    activities: [
      "Ejercicios virtuales de construcción de equipo",
      "Simulación: Rol de capitán en partidos decisivos",
      "Estudio de caso: Equipos campeones y liderazgo colectivo",
      "Evaluación: Test de estilo de liderazgo personal",
    ],
    learningObjectives: [
      "Fomentar sinergia y comunicación en el equipo.",
      "Desarrollar habilidades de liderazgo situacional.",
      "Reconocer y asumir distintos roles dentro del juego colectivo.",
    ],
  },
];

interface UnitDetailsPageProps {
  params: {
    unitId: string;
  };
}

export default async function UnitDetailsPage({
  params,
}: UnitDetailsPageProps) {
  const unit = curriculumData.find((u) => u.id === params.unitId);

  if (!unit) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-semibold text-destructive">
          Unit not found
        </h1>
        <p className="text-muted-foreground">
          The requested curriculum unit could not be located.
        </p>
        <Link href="/curriculum">
          <Button variant="link" className="mt-4">
            Back to Curriculum
          </Button>
        </Link>
      </div>
    );
  }

  const getMaterialIcon = (material: string) => {
    if (
      material.toLowerCase().includes("pdf") ||
      material.toLowerCase().includes("guide")
    )
      return <FileText className="h-5 w-5 text-accent mr-2" />;
    if (
      material.toLowerCase().includes("video") ||
      material.toLowerCase().includes("lecture")
    )
      return <Video className="h-5 w-5 text-accent mr-2" />;
    // if (material.toLowerCase().includes('interactive') || material.toLowerCase().includes('module')) return <Puzzle className="h-5 w-5 text-accent mr-2" />;
    return <BookText className="h-5 w-5 text-accent mr-2" />;
  };

  const getActivityIcon = (activity: string) => {
    if (activity.toLowerCase().includes("quiz"))
      return <HelpCircle className="h-5 w-5 text-accent mr-2" />;
    if (
      activity.toLowerCase().includes("case study") ||
      activity.toLowerCase().includes("analysis")
    )
      return <BookText className="h-5 w-5 text-accent mr-2" />;
    if (
      activity.toLowerCase().includes("forum") ||
      activity.toLowerCase().includes("discussion")
    )
      return <Users2 className="h-5 w-5 text-accent mr-2" />;
    // if (activity.toLowerCase().includes('simulation') || activity.toLowerCase().includes('exercise')) return <Gamepad2 className="h-5 w-5 text-accent mr-2" />;
    return <CheckSquare className="h-5 w-5 text-accent mr-2" />;
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <Card className="shadow-xl animate-fade-in">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-6">
          <div className="flex items-center space-x-4">
            <SportIcon name={unit.iconType} className="h-12 w-12" />
            <div>
              <CardTitle className="text-3xl font-headline">
                {unit.title}
              </CardTitle>
              <CardDescription className="text-primary-foreground/80">
                {unit.summary}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Detailed Description
            </h2>
            <p className="text-foreground leading-relaxed">
              {unit.longDescription || unit.summary}
            </p>
          </div>

          {unit.learningObjectives && unit.learningObjectives.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-3">
                Learning Objectives
              </h2>
              <ul className="list-disc list-inside space-y-1 text-foreground">
                {unit.learningObjectives.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Materials
            </h2>
            <ul className="space-y-2">
              {unit.materials.map((material, index) => (
                <li
                  key={index}
                  className="flex items-center p-3 bg-secondary/50 rounded-md"
                >
                  {getMaterialIcon(material)}
                  <span className="text-secondary-foreground">{material}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-3">
              Activities
            </h2>
            <ul className="space-y-2">
              {unit.activities.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-center p-3 bg-secondary/50 rounded-md"
                >
                  {getActivityIcon(activity)}
                  <span className="text-secondary-foreground">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 text-center">
            <Link href="/curriculum">
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Volver al Curriculum
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Generate static paths for curriculum units if desired (optional)
// export async function generateStaticParams() {
//   return curriculumData.map((unit) => ({
//     unitId: unit.id,
//   }));
// }
