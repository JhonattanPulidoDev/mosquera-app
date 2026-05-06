import { Component } from '@angular/core';

/** Tarjeta de acción principal (encuesta o reporte) */
interface ActionCard {
  readonly icon: string;       // SVG path data
  readonly iconBg: string;     // Tailwind classes para el fondo del ícono
  readonly accentClass: string;// Tailwind border/bg accent color de la tarjeta
  readonly tag: string;        // Etiqueta pequeña sobre el título
  readonly tagClass: string;   // Tailwind classes para la etiqueta
  readonly title: string;
  readonly description: string;
  readonly buttonLabel: string;
  readonly buttonClass: string;// Tailwind classes para el botón
  readonly url: string;        // Enlace externo
  readonly features: string[]; // Beneficios/puntos en la tarjeta
}

/** Razón de participación (sección informativa) */
interface Reason {
  readonly icon: string;
  readonly title: string;
  readonly description: string;
}

@Component({
  selector: 'app-participate',
  standalone: true,
  imports: [],
  templateUrl: './participate.component.html',
  styleUrl: './participate.component.css',
})
export class ParticipateComponent {
  /** Sección 2 – Dos tarjetas de acción principal */
  readonly actions: ActionCard[] = [
    {
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01',
      iconBg: 'bg-green-600',
      accentClass: 'border-green-300 hover:border-green-500',
      tag: 'Encuesta ciudadana',
      tagClass: 'bg-green-100 text-green-800',
      title: 'Responde la Encuesta',
      description:
        'Comparte tu opinión sobre la gestión de residuos en tu comunidad. Tu información nos ayudará a tomar mejores decisiones.',
      buttonLabel: 'Ir a la encuesta',
      buttonClass: 'bg-green-600 hover:bg-green-700 text-white',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSeRL6QDYx9SkrYKRGI6aPPC7MwAz9MXAP4oNyjf5VJC5ipHew/viewform',
      features: [
        'Solo toma 5 minutos',
        'Totalmente anónima',
        'Resultados públicos',
      ],
    },
  ];

  /** Sección 3 – Razones para participar */
  readonly reasons: Reason[] = [
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Identifica problemas reales',
      description:
        'Tus reportes y respuestas revelan las necesidades genuinas de la comunidad que de otro modo pasarían desapercibidas.',
    },
    {
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: 'Prioriza soluciones',
      description:
        'Con datos ciudadanos, las autoridades pueden enfocar los recursos en los puntos de mayor impacto ambiental.',
    },
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Genera impacto positivo',
      description:
        'La colaboración ciudadana transforma el entorno y construye un municipio más limpio y sostenible para todos.',
    },
  ];
}
