import { Component, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [],
  template: '<h1>Angular App</h1>',
})
export class App {
  readonly #http = inject(HttpClient);
 
  constructor() {
    this.get();
  }
  
  get(){
    this.#http.get("https://jsonplaceholder.typicode.com/todos/").subscribe({ 
      next:(res) => console.log(res),
      error: (err:HttpErrorResponse) => console.error(err)
    });
  }
}
