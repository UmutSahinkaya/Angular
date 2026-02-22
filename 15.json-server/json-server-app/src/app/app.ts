import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <h4>App Component</h4>
    <button (click)="get()">Get</button>
    <button (click)="post()">Post</button>
    <ul>
      @for (val of posts(); track val.id) {
        <li>{{ val.id }} - {{ val.views }} - {{ val.title }}</li>
      }
    </ul>
  `,
})
export class App {
  readonly posts = signal<any[]>([]);
  readonly #http = inject(HttpClient);

  post() {
    const data = {
      id: '3',
      title: 'Angular 17',
      views: 'test test',
    };
    data.id=Math.random().toString(16).slice(2);
    data.views=Math.random().toString(16).slice(2);
    data.title=Math.random().toString(16).slice(2);
    this.#http.post('http://localhost:3000/posts', data).subscribe((res) => this.get());
  }
  get() {
    this.#http.get<any[]>('http://localhost:3000/posts').subscribe({
      next: (res) => {
        this.posts.set(res);
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
      },
    });
  }
}

