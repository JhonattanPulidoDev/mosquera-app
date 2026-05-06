import { Component } from '@angular/core';

/** Miembro del equipo de trabajo */
interface TeamMember {
  readonly name: string;
  readonly role: string;
  readonly imgSeed: number; // semilla para diferenciar imágenes de picsum
}

/** Elemento de información de contacto */
interface ContactInfo {
  readonly icon: string;       // SVG path data
  readonly iconBg: string;     // Tailwind classes para el badge del ícono
  readonly label: string;      // Título descriptivo
  readonly value: string;      // Valor visible
  readonly href: string | null;// Enlace opcional (mailto:, tel:)
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  /** Sección 2 – Equipo del proyecto */
  readonly team: TeamMember[] = [
    { name: 'Lorena Cobos',      role: 'Estudiante Contaduría Pública', imgSeed: 10 },
    { name: 'Paola Quintana',    role: 'Estudiante Contaduría Pública', imgSeed: 20 },
  ];

  /** Sección 3 – Información de contacto */
  readonly contactItems: ContactInfo[] = [
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      iconBg: 'bg-green-100 text-green-700',
      label: 'Correo electrónico',
      value: 'acobos@ucundinamarca.edu.co',
      href: 'mailto:acobos@ucundinamarca.edu.co',
    },
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      iconBg: 'bg-blue-100 text-blue-700',
      label: 'Teléfono',
      value: '+57 300 123 4567',
      href: 'tel:+573001234567',
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
      iconBg: 'bg-amber-100 text-amber-700',
      label: 'Ubicación',
      value: 'Mosquera, Cundinamarca, Colombia',
      href: null,
    },
  ];
}
