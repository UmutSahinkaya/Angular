import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: ``,
})
export class App implements OnInit {
  todos = signal<any[]>([]);
  readonly #http = inject(HttpClient);
  readonly loading= signal<boolean>(false);

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.loading.set(true);
    this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos').subscribe({
      next: (res) => {
        this.todos.set(res);
        this.loading.set(false);
      },
      error: (err: HttpErrorResponse) => {
        console.log('Error fetching todos:', err);
        this.loading.set(false);
      },
    });
  }
}
