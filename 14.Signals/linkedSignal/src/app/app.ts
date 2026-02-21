import { Component, linkedSignal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
    <input [(ngModel)]="num1" />
    <input [(ngModel)]="num2" />
    <p>Sum: {{ total() }}</p>
  `,
})
export class App {
  readonly num1 = signal(0);
  readonly num2 = signal(0);
  readonly total = linkedSignal(() => {
    console.log('number 1:' + this.num1());
    console.log('number 2:' + this.num2());
    return this.num1() + this.num2();
  });

  constructor() {
    this.total.set(15);
    //computed ile doğrudan set ataması yapamayız.
    // Sadece okunabilir bir signal oluşturur.
    //  Ancak linkedSignal ile oluşturulan total sinyaline set ataması yapabiliriz.
    this.total.update((currentTotal) => currentTotal + 5);
    // update metodu, mevcut değeri alır ve yeni değeri döndüren bir fonksiyon alır.
  }
}
