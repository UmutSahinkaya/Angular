import { Component, inject } from '@angular/core';
import { ExampleService } from '../services/example';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.html',
  styleUrls: ['./b.css'],
})
export class BComponent {
  
  exService = inject(ExampleService); //diğer bir inject yöntemi 

// constructor(
//     public exService:ExampleService
//   ) {}
}
