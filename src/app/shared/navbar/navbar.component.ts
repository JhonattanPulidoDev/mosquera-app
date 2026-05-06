import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

/** Navigation link model */
interface NavLink {
  readonly label: string;
  readonly path: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  /** Controls mobile hamburger menu visibility */
  protected readonly isMenuOpen = signal(false);

  /** Primary navigation links shared across desktop and mobile menus */
  readonly navLinks: NavLink[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Problema', path: '/problem' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Educación', path: '/education' },
    { label: 'Participar', path: '/participate' },
    { label: 'Contacto', path: '/contact' }
  ];

  /** Toggle hamburger menu open/closed */
  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  /** Close the mobile menu (called after navigating to a route) */
  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
