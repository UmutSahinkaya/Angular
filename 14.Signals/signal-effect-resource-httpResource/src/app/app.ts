import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Test } from './test';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Test],
  template: `
    <h4 #headEl>App Component</h4>
    <input [(ngModel)]="name" />
    <app-test [name]="name()" (newEvent)="save()"></app-test>
  `,
})
export class App {
  readonly name = signal<string>('Umut Şahinkaya');

  // @ViewChild('headEl') headElement!: HTMLElement;
  readonly headElVar = viewChild.required<ElementRef<HTMLHeadElement>>('headEl'); // viewChild.required ile headElement'in kesinlikle bulunması gerektiğini belirtiyoruz. Eğer bulunmazsa Angular bir hata fırlatır.



  save() {
    console.log('Event is working');
    this.headElVar().nativeElement.innerText = 'Changed by Event'; // viewChild ile eriştiğimiz headElement'in innerText'ini değiştiriyoruz.
  }
}
