import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoPipe } from './todo-pipe';

@Component({
  selector: 'app-root',
  imports: [FormsModule, TodoPipe],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
 work:string="";
 todos:string[]=["domates","biber","soğan"];
 search:string="";

  Save(){
  this.todos.push(this.work);
  this.work="";
  }
}
