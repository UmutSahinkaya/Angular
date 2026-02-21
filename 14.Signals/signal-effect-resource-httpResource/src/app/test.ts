import { Component, EventEmitter, input, Input, linkedSignal, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [FormsModule],
  template: `
    <h4>Test Component</h4>
    <p>Name: {{ nameSignal() }}</p>
    <input [(ngModel)]="nameSignal" />
    <button (click)="save()">Save</button>
  `,
})
export class Test {
  // readonly name = input<string>('Umut Şahinkaya');
  readonly name = input.required<string>();
  readonly nameSignal = linkedSignal(() => this.name()); // linkedSignal a çevirdiğimiz zaman Constructor da set edebiliyoruz.
  // @Input() name: string = '';

   readonly newEvent = output<void>(); // void olduğu için herhangi bir parametre almaz. Sadece event tetiklemek için kullanılır.
  // readonly newEvent = output<string>(); // string olduğu için bir parametre alır. Event tetiklemek için kullanılır.

  // @Output() newEvent = new EventEmitter<void>();

  constructor() {
    //this.nameSignal() = "Umut Şahinkaya";
    this.nameSignal.set('Umut Şahinkaya');
  }

  save() {
    // this.newEvent.emit(this.nameSignal()); // örnek olması açısından nameSignal()'ın değerini event ile emit ediyoruz.
    this.newEvent.emit(); // örnek olması açısından nameSignal()'ın değerini event ile emit ediyoruz.
  }
}
