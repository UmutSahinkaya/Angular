import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrCurrencyPipe } from 'tr-currency';

@Component({
  selector: 'app-root',
  imports: [CommonModule,TrCurrencyPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  name:string = "Angular Pipe Example";
  date:Date = new Date();
  num:number = 17002.25;
}
