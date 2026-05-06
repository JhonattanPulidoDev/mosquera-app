import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

/**
 * Application routes.
 *
 * All pages are nested under LayoutComponent so they automatically
 * inherit the Navbar and Footer shell. Add new page routes to the
 * `children` array using lazy-loaded components for best performance.
 *
 * Example:
 *   { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) }
 */
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // ── Page routes go here ──────────────────────────────
      { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
      { path: 'problem', loadComponent: () => import('./pages/problem/problem.component').then(m => m.ProblemComponent) },
      // { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'education', loadComponent: () => import('./pages/education/education.component').then(m => m.EducationComponent) },
      { path: 'participate', loadComponent: () => import('./pages/participate/participate.component').then(m => m.ParticipateComponent) },
      // { path: 'solutions', loadComponent: () => import('./pages/solutions/solutions.component').then(m => m.SolutionsComponent) },
      // { path: 'participate',loadComponent: () => import('./pages/participate/participate.component').then(m => m.ParticipateComponent) },
      // { path: 'map',       loadComponent: () => import('./pages/map/map.component').then(m => m.MapComponent) },
      { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
      // ── Fallback ─────────────────────────────────────────
      // { path: '**', redirectTo: '' },
    ],
  },
];

