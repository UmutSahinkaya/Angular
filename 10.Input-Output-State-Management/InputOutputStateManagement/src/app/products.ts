import { Component } from '@angular/core';
import { List } from './list';

@Component({
  selector: 'app-products',
  imports: [List],
  template:`
    <h2>Products Component</h2><hr>
    <p>{{name}}</p>
    <app-list [name]="name" (myEvent)="save($event)"></app-list>
    
  `
})
export class Products {
  name:string = 'Umut';

  save(event: any) {
    this.name = event;
  }
}
