import { Component, inject } from '@angular/core';
import { Common } from '../common';

@Component({
  selector: 'app-home',
  imports: [],
  template:`
  <h4>Home Page</h4>
  <p style="color:red;">Number: {{ common.num }}</p>
  <button (click)="increament()">Increment</button>
  `
})
export class Home {

  common=inject(Common);

  increament(){
    this.common.num++;
  }
}
