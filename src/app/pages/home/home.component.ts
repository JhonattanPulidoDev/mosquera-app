import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Single feature card shown in the "Key Features" section */
interface FeatureCard {
  readonly icon: string;      // inline SVG path data
  readonly title: string;
  readonly description: string;
  readonly color: string;     // Tailwind bg class for the icon badge
  readonly route: string;     // router link target
}

/** Statistic shown in the Hero band */
interface Stat {
  readonly value: string;
  readonly label: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  /** Hero statistics band */
  readonly stats: Stat[] = [
    { value: '270 mil', label: 'Toneladas de residuos anuales' },
    { value: '90 %',   label: 'Residuos sin clasificar' },
    { value: '63,5 k+',  label: 'Ciudadanos impactados' },
    { value: '12',     label: 'Puntos ecológicos subterraneos activos' },
  ];

  /** Key Features grid cards */
  readonly features: FeatureCard[] = [
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Reciclaje Inteligente',
      description:
        'Clasifica y reporta residuos con nuestra guía interactiva. Aprende qué va en cada contenedor y encuentra el punto ecológico más cercano.',
      color: 'bg-green-100 text-green-700',
      route: '/education',
    },
    {
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      title: 'Dashboard Ambiental',
      description:
        'Monitorea en tiempo real los indicadores ambientales de Mosquera: calidad del aire, generación de residuos y tendencias de reciclaje.',
      color: 'bg-blue-100 text-blue-700',
      route: '/dashboard',
    },
    {
      icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
      title: 'Participación Ciudadana',
      description:
        'Reporta problemáticas ambientales, vota en iniciativas comunitarias y sé parte activa del cambio en tu municipio.',
      color: 'bg-purple-100 text-purple-700',
      route: '/participate',
    },
    {
      icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
      title: 'Educación Ambiental',
      description:
        'Accede a recursos educativos, talleres y guías para adoptar hábitos sostenibles en tu hogar, escuela y comunidad.',
      color: 'bg-amber-100 text-amber-700',
      route: '/education',
    },
  ];
}
