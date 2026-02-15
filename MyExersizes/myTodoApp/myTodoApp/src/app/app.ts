import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
})
export class App {
  work: string = '';
  updateWork: string = '';
  todos: string[] = [];
  updateIndex: number = 0;
  isUpdateWorkForActive: boolean = false;
  save() {
    this.todos.push(this.work);
    this.work = '';
  }
  update() {
    this.todos[this.updateIndex] = this.updateWork;
    this.isUpdateWorkForActive = false;
  }
  get(index: number) {
    this.updateWork = this.todos[index];
    this.updateIndex = index;
    this.isUpdateWorkForActive = true;
  }
  delete(index: number) {
    this.todos.splice(index, 1);
  }
}
