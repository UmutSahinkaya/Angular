import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  template:`
    <h2>List</h2>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        @for(val of products,track val) {
          <tr>
            <td>{{$index}}</td> 
            <td>{{val.name}}</td>
            <td>{{val.price}}</td>
          </tr>
        }
    </table>
  `
})
export class List {
  @Input({required: true}) products: any[] = [];
  @Input() title: string = '';
}
