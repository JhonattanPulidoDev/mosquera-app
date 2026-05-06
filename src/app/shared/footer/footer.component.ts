import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Social media link model */
interface SocialLink {
  readonly label: string;
  readonly url: string;
  readonly iconPath: string;
}

/** Navigation link model (mirrored from navbar for quick links column) */
interface NavLink {
  readonly label: string;
  readonly path: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  /** Current year for copyright notice */
  readonly currentYear = new Date().getFullYear();

  /** Quick-links column mirrors the main navigation */
  readonly navLinks: NavLink[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Problema', path: '/problem' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Educación', path: '/education' },
    { label: 'Participar', path: '/participate' },
    { label: 'Contacto', path: '/contact' },
  ];

  /** Social media links with inline SVG paths (no icon library dependency) */
  readonly socialLinks: SocialLink[] = [    
    {
      label: 'YouTube',
      url: 'https://www.canva.com/design/DAHDqMDuZzY/SEgaY049jKkFKeRx2VfHkQ/watch?utm_content=DAHDqMDuZzY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8d4b06c93c',
      iconPath:
        'M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z',
    },
  ];
}
