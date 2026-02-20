import { FormsModule } from '@angular/forms';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <h3>Computed Signal</h3>
    <input [(ngModel)]="num1" />
    <input [(ngModel)]="num2" />
    <p>{{total()}}
  `,
})
export class App {
  num1 = signal<number>(0);
  num2 = signal<number>(0);
  total = computed(() => +this.num1() + +this.num2()); // başlarına artı koymamızın sebebi string olarak gelmelerini engellemek ve toplama işlemi yapabilmek
}
