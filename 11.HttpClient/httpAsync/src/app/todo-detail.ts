import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-detail',
  imports: [],
  template:`
  <h3>Todo Detail</h3>
  <p>Title: {{todo.title}}</p>
  <p>Completed: {{todo.completed}}</p>
  <p>User ID: {{todo.userId}}</p>
  `
})
export class TodoDetail {
 @Input() todo:any;

}
