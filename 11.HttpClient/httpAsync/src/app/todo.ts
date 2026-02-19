import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-todo',
  imports: [RouterLink],
  template:`
  <ul>
    @for(val of todos; track val){
      <li>{{val.title}} <button [routerLink]="['/', val.id]">Detail</button></li>
    }
  </ul>
  `
})
export class Todo {
  todos:any[]=[];
 readonly #http: HttpClient;

 constructor(http: HttpClient){
  this.#http = http;
  this.get();
 }

 async get(){
  var res= await lastValueFrom(this.#http.get<any[]>("https://jsonplaceholder.typicode.com/todos"));
  this.todos = res;
 }
 
}
