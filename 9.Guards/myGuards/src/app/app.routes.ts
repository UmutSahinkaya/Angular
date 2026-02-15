import { Routes } from '@angular/router';
import { Home } from '../home/home';
import { Login } from '../login/login';
import { authGuard } from '../auth-guard';

export const routes: Routes = [
  {
    path: 'home',
    canActivate: [authGuard],
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
];
