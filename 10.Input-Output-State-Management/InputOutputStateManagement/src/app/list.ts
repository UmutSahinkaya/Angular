import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [FormsModule],
  template:`
    <h2>List</h2>
    <input [(ngModel)]="name"/>
    <button (click)="save()">Save</button>
    
  `
})
export class List {
  @Input() name:string = '';
  @Output() myEvent= new EventEmitter<string>();

  save(){
    this.myEvent.emit(this.name);
  }
}
