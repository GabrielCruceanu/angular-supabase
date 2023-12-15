import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app.component').then((mod) => mod.AppComponent),
  },
  {
    path: 'supabase-auth',
    loadComponent: () =>
      import('./supabase-auth/view/supabase-auth.component').then(
        (mod) => mod.SupabaseAuthComponent,
      ),
  },
];
