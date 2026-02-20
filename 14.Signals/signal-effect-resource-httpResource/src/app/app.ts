import { Component,effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="num1" />
    <input [(ngModel)]="num1" />
  `,
})
export class App {
  readonly num1 = signal(0);
  readonly num2 = signal(0);

  constructor() {
     effect(()=>{
      console.log("Ben çalışıyorum.");
      console.log(this.num1());
    })
  }
}
