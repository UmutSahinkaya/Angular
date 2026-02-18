import { Component, inject } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  imports: [],
  template: '<button (click)="get()">Get Data</button>',
})
export class App {
  readonly #http = inject(HttpService);
  endpoint = 'https://jsonplaceholder.typicode.com/todos';
  get() {
    this.#http.get<any>(
      this.endpoint,
      (res) => {
        console.log(res); // Başarılı ise sonuçları konsola yazdır
      },
      (err) => {
        console.error(err); // Hata durumunda hatayı konsola yazdır
      },
    );
  }
  get2() {
    this.#http.get<any>(this.endpoint, (res) => {
        // Başarılı ise.
        },(err)=>{
          // Hata durumunda.
        });
  }
}
