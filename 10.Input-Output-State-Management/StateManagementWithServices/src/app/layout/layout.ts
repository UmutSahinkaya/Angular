import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-layout',
  imports: [Navbar,RouterModule],
  template:`
  <app-navbar/> <hr>
  <router-outlet></router-outlet>
  `
})
export class Layout {

}
