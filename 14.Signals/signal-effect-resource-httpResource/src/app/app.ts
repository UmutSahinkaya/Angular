import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, resource, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
  <h4>App Component</h4>
  @if(error()){
    <p>{{error()}}</p>
  }
  @if(loading()){
    <p>Loading...</p>
  }
  @else {
    <ul>
      @for(data of todos();track data.id){
        <li>{{data.title}}</li>
      }
    </ul>
  }
  `,
})
export class App {
  readonly result = resource({
    loader: async () => {
      const res = await lastValueFrom(
        this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos/'),
      );
      //const res = await fetch('https://jsonplaceholder.typicode.com/todos/').then(res=>res.json());

      await new Promise((resolve) => setTimeout(resolve, 2000));
      return res;
    },
  });

  readonly todos = computed(() => this.result.value() ?? []);
  readonly loading = computed(() => this.result.isLoading() ?? false);
  readonly error = computed(() => {
    console.log(this.result.error());

    return this.result.error() ? 'Something went wrong :(  Try again later.' : undefined;
  });
  readonly #http = inject(HttpClient);
}
