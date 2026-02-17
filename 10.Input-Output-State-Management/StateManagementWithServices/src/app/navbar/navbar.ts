import { Component } from '@angular/core';
import { Common } from '../common';

@Component({
  selector: 'app-navbar',
  imports: [],
  template:`
  <h4>Navbar</h4>
  <h4 style="color:blue;">{{ common.num }}</h4>
  `
})
export class Navbar {
  constructor(public common:Common){
  }
}
