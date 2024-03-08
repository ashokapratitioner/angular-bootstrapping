import { Routes } from '@angular/router';
import { AuthenticationGuard } from './shared/guards/authentication.guard';

const authGuards = [AuthenticationGuard];

const dashboard = {
  loadChildren: () =>
    import('./views/dashboards/dashboard.module').then(
      (m) => m.DashboardModule
    ),
  canActivate: authGuards,
};

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    ...dashboard,
    title: 'Dashboard',
  },
  {
    path: 'dashboards',
    ...dashboard,
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./views/auth/auth-routing.module').then(
        (m) => m.AuthRoutingModule
      ),
    title: 'Login',
  },
  { path: '**', redirectTo: 'dashboards' },
];
