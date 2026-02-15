import { Routes } from '@angular/router';
import { HomeComponent } from './home/home'; 
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { Layouts } from './layouts/layouts';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
    path: "",
    component: Layouts,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about',
        component: AboutComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
      {
        path: 'contact/:params',
        component: ContactComponent,
      }
    ]
  }
];
