import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

/**
 * LayoutComponent
 *
 * Acts as the application shell that wraps all routed pages.
 * It renders the persistent Navbar at the top, a <router-outlet>
 * for page content in the middle, and the Footer at the bottom.
 *
 * Usage in app.routes.ts:
 *   { path: '', component: LayoutComponent, children: [ ...page routes ] }
 */
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {}
