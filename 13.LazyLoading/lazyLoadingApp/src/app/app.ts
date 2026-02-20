import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink],
  template: ` <div style="display: flex; gap: 10px; margin-bottom: 20px">
    <a routerLink="/home">Home</a>
    <a routerLink="/product">Product</a>
    <a routerLink="/contact">Contact</a>
  </div>`,
})
export class App {
}
