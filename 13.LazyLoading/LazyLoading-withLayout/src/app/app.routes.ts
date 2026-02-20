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
        children: [
          {
            path: '',
            loadComponent: () => import('../pages/products/products'),
          },
          {
            path: 'create',
            loadComponent: () => import('../pages/products/create-product/create-product'),
          },
        ],
      },
    ],
  },
];
