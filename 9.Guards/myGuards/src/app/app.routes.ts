import { Routes, CanDeactivateFn } from '@angular/router';
import { Home } from '../home/home';
import { Login } from '../login/login';
import { authGuard } from '../auth-guard';
import { Layout } from '../layout/layout';
import { inject } from '@angular/core/primitives/di';
import { inject } from '@angular/core';
import { Auth } from '../auth';
import { checkGuard } from '../check-guard';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    //canActivateChild: [authGuard],
    //canActivateChild: [() => inject(Auth).isAuthenticated()], //service kullanarak guard
    children: [
      {
        path: '',
        canDeactivate: [checkGuard],
        component: Home,
      },
      {
        path: 'about',
        component: Home,
      },
      {
        path: 'contact',
        component: Home,
      },
      {
        path: 'personels',
        component: Home,
      },
    ],
  },

  {
    path: 'login',
    component: Login,
  },
];
