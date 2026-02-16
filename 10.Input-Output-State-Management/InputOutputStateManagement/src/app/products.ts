import { Component } from '@angular/core';
import { List } from './list';

@Component({
  selector: 'app-products',
  imports: [List],
  template:`
    <h2>Products Component</h2><hr>
    <app-list [products]="products" [title]="'Product List'"></app-list>
  `
})
export class Products {
  products:any[] = [
    {name:'Bilgisayar',price:10000},
    {name:'Telefon',price:5000},
    {name:'Tablet',price:7000},
    {name:'Monitör',price:3000},
    {name:'Klavye',price:1000},
  ]
}
