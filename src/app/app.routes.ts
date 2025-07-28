import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'services',
    loadComponent: () => import('./services/services.component').then((m) => m.ServicesComponent),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
