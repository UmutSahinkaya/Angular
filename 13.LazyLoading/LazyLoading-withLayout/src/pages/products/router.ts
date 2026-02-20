import {  Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./products'),
  },
  {
    path: "create",
    loadComponent: () => import('./create-product/create-product'),
  },
];