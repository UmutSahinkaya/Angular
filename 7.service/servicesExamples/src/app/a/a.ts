import { Component } from '@angular/core';
import { BComponent } from '../b/b';
import { FormsModule } from '@angular/forms';
import { ExampleService } from '../services/example';

@Component({
  selector: 'app-a',
  imports: [BComponent,FormsModule],
  templateUrl: './a.html',
  styleUrls: ['./a.css'],
})
export class AComponent {
  constructor(
    public exService:ExampleService
  ) {}
}
