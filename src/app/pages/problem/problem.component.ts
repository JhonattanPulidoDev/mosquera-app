import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** One of the key problem cards */
interface ProblemCard {
  readonly icon: string;      // SVG path data
  readonly iconBg: string;    // Tailwind bg + text classes for icon badge
  readonly title: string;
  readonly description: string;
}

/** Impact statistic */
interface ImpactStat {
  readonly value: string;
  readonly label: string;
  readonly color: string;     // Tailwind text-* class for the large value
}

/** Root-cause item */
interface Cause {
  readonly icon: string;      // SVG path data
  readonly title: string;
  readonly detail: string;
}

@Component({
  selector: 'app-problem',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './problem.component.html',
  styleUrl: './problem.component.css',
})
export class ProblemComponent {
  /** Section 2 – Key Problems cards */
  readonly problems: ProblemCard[] = [
    {
      icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
      iconBg: 'bg-red-100 text-red-600',
      title: 'Acumulación de Residuos',
      description:
        'Grandes cantidades de residuos no son recolectadas adecuadamente, generando contaminación en calles y espacios públicos.',
    },
    {
      icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      iconBg: 'bg-amber-100 text-amber-600',
      title: 'Falta de Conciencia Ambiental',
      description:
        'Muchos ciudadanos no están informados sobre las prácticas correctas de reciclaje y separación de residuos.',
    },
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      iconBg: 'bg-orange-100 text-orange-600',
      title: 'Contaminación Ambiental',
      description:
        'La disposición inadecuada de residuos contamina fuentes de agua, suelo y aire.',
    },
  ];

  /** Section 3 – Impact Data */
  readonly stats: ImpactStat[] = [
    { value: '+43%', label: 'Aumento en la generación de residuos en los últimos años', color: 'text-red-600' },
    { value: '10%',  label: 'Solo una pequeña fracción de los residuos es reciclada',   color: 'text-amber-600' },
    { value: 'Alto', label: 'Impacto ambiental sobre los ecosistemas locales',           color: 'text-orange-600' },
  ];

  /** Section 5 – Causes */
  readonly causes: Cause[] = [
    {
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      title: 'Deficiente Gestión de Residuos',
      detail:
        'La infraestructura insuficiente y los horarios de recolección irregulares dejan a los barrios sin un servicio confiable de disposición de residuos.',
    },
    {
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      title: 'Falta de Educación Ambiental',
      detail:
        'Sin educación ambiental dirigida, los habitantes no pueden tomar decisiones informadas sobre la separación y el reciclaje de residuos.',
    },
    {
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0',
      title: 'Baja Participación Ciudadana',
      detail:
        'El escaso compromiso comunitario implica menos voces que impulsen cambios sistémicos y menos manos que ayuden a implementar soluciones.',
    },
  ];
}
