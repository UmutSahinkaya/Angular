import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent:()=>import('./home/home')
    },
    {
        path:'product',
        loadComponent:()=>import('./product/product')
    },
    {
        path:'contact',
        loadComponent:()=>import('./contact/contact')
    }
];
