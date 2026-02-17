import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: ``
})
export class App {

  todos:any[]=[];
  todo:{title:string,userId:number}={title:'',userId:0};
  // constructor(
  //   private http: HttpClient
  // ) {} veya
  readonly #http=inject(HttpClient); //readonly olması bunun bir servis olduğunu ve değişmeyeceğini gösterir. ayrıca # ile private olduğunu belirtir.Yani html de kullanmayacağını anlıyoruz.

  get(){
    this.#http.get<any[]>('https://jsonplaceholder.typicode.com/todos').subscribe(
      {
        next:(res)=>{
          this.todos=res;
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
        }
      },
    );
  }

  post(){
    const body={
      title:'New Todo',
      userId:1
    }
    this.#http.post<{message:string}>('https://jsonplaceholder.typicode.com/todos',this.todo).subscribe(
      {
        next:(res)=>{
          console.log(res.message);
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
        }
      }
    );
  }

}
