import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Tipo de residuo – tarjeta principal de clasificación */
interface WasteCategory {
  readonly icon: string;       // SVG path data
  readonly colorClasses: string; // Tailwind bg/text/border classes (theme por tipo)
  readonly badgeClass: string;   // Tailwind bg para el badge de encabezado
  readonly title: string;
  readonly description: string;
  readonly examples: string[];
}

/** Paso de la guía "Cómo Separar Correctamente" */
interface SeparationStep {
  readonly step: number;
  readonly title: string;
  readonly detail: string;
  readonly icon: string;
}

/** Consejo práctico */
interface Tip {
  readonly icon: string;
  readonly text: string;
  readonly color: string; // Tailwind bg class para el icono badge
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css',
})
export class EducationComponent {
  /** Sección 2 – Clasificación de residuos */
  readonly categories: WasteCategory[] = [
    {
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      colorClasses: 'border-green-300 bg-green-50',
      badgeClass: 'bg-green-600',
      title: 'Residuos Orgánicos',
      description: 'Son aquellos de origen natural que se descomponen fácilmente.',
      examples: ['Restos de comida', 'Cáscaras de frutas', 'Residuos de jardín'],
    },
    {
      icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      colorClasses: 'border-blue-300 bg-blue-50',
      badgeClass: 'bg-blue-600',
      title: 'Residuos Reciclables',
      description: 'Materiales que pueden ser transformados y reutilizados.',
      examples: ['Plástico', 'Papel y cartón', 'Vidrio', 'Metales'],
    },
    {
      icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16',
      colorClasses: 'border-gray-400 bg-gray-50',
      badgeClass: 'bg-gray-700',
      title: 'Residuos No Reciclables',
      description: 'Residuos que no pueden ser reciclados y deben disponerse adecuadamente.',
      examples: ['Papel higiénico', 'Residuos contaminados', 'Empaques sucios'],
    },
  ];

  /** Sección 3 – Guía visual de separación */
  readonly steps: SeparationStep[] = [
    {
      step: 1,
      icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
      title: 'Identifica el tipo de residuo',
      detail: 'Antes de desechar, verifica si es orgánico, reciclable o no reciclable.',
    },
    {
      step: 2,
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
      title: 'Usa el recipiente correcto',
      detail: 'Deposita cada residuo en el contenedor o bolsa designada para su tipo.',
    },
    {
      step: 3,
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      title: 'Limpia los envases',
      detail: 'Enjuaga botellas y empaques antes de depositarlos en el contenedor de reciclables.',
    },
    {
      step: 4,
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Lleva al punto ecológico',
      detail: 'Entrega tus materiales reciclables en el punto ecológico más cercano de Mosquera.',
    },
  ];

  /** Sección 4 – Consejos prácticos */
  readonly tips: Tip[] = [
    {
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      text: 'Limpia los envases antes de reciclarlos.',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
      text: 'Reduce el uso de plásticos de un solo uso.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      text: 'Separa los residuos desde la fuente (tu hogar).',
      color: 'bg-blue-100 text-blue-700',
    },
    {
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      text: 'Infórmate sobre los horarios de recolección en tu zona.',
      color: 'bg-amber-100 text-amber-700',
    },
  ];
}
