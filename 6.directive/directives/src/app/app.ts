import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Renklendir } from './renklendir';
import { Validate } from './validate';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Renklendir, Validate],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  
}
