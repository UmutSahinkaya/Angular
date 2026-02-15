import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  @Input() Id: number = 0;
  @Input() Name: string = '';
}
