import { Component, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [FormField],
  template: `
    <h1>Signal Forms (Angular v21+)</h1>
    <div>
      <label>Email</label>
      <input [formField]="loginForm.email" />
    </div>
    <div>
      <label>Password</label>
      <input [formField]="loginForm.password" />
    </div>
    <div>
      <button (click)="signIn()">Login</button>
    </div>
  `,
})
export class App {
  readonly login = signal({
    email: '',
    password: '',
  });
  // readonly loginForm = form(this.login); // bu şekilde normalde form oluşturuyoruz

  readonly loginForm = form(this.login,(scheme)=>{
    required(scheme.email);
    required(scheme.password);
    email(scheme.email);
  }); // bu şekilde de form oluşturabiliriz. İkinci parametre olarak scheme vererek validasyon işlemlerini yapabiliriz.

  signIn(){
    console.log(this.loginForm().value());
  }
}
