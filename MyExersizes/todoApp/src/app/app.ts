import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
})
export class App {
  work: string = '';
  updatework: string = '';
  todos: string[] = [];
  updateIndex: number = 0;
  isUpdateWorkForActive: boolean = false;
  save() {
    this.todos.push(this.work);
    this.work = '';
  }
  delete(index: number) {
    this.todos.splice(index, 1);
  }
  get(index: number) {
    this.updatework = this.todos[index];
    this.updateIndex = index;
    this.isUpdateWorkForActive = true;
  }
  update() {
    this.todos[this.updateIndex] = this.updatework;
    this.isUpdateWorkForActive = false;
  }
}
