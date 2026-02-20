import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/layout/layout'),
    children: [
      {
        path: '',
        loadComponent: () => import('../pages/home/home'),
      },
      {
        path: 'products',
        loadChildren:()=> import('../pages/products/router').then(m=>m.routes),
      },
    ],
  },
];
