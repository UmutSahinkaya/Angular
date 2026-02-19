import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  template: `
    <main class="container">
      <h1>Reactive Form (Sade)</h1>

      <form [formGroup]="form" (ngSubmit)="save()">
        <label>
          İsim
          <input type="text" formControlName="name" />
        </label>

        @if (name.invalid && (name.touched || submitted)) {
          <small>İsim alanı zorunlu (min 2 karakter).</small>
        }

        <label>
          E-posta
          <input type="email" formControlName="email" />
        </label>

        @if (email.invalid && (email.touched || submitted)) {
          <small>Geçerli bir e-posta gir.</small>
        }

        <div class="actions">
          <button type="submit">Gönder</button>
          <button type="button" (click)="form.reset()">Temizle</button>
        </div>
      </form>

      <pre>{{ result ? (result | json) : 'Henüz gönderim yok' }}</pre>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: Arial, Helvetica, sans-serif;
      }

      .container {
        max-width: 520px;
        margin: 24px auto;
        padding: 0 12px;
      }

      form {
        display: grid;
        gap: 10px;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
      }

      label {
        display: grid;
        gap: 6px;
      }

      input,
      button {
        font: inherit;
        padding: 8px;
      }

      .actions {
        display: flex;
        gap: 8px;
      }

      small {
        color: #b10000;
      }

      pre {
        margin-top: 12px;
        background: #f6f6f6;
        padding: 10px;
        border-radius: 8px;
      }
    `,
  ],
})
export class App {
  submitted = false;
  result: { name: string; email: string } | null = null;
  form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get name() {
    return this.form.controls.name;
  }

  get email() {
    return this.form.controls.email;
  }

  save(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.result = this.form.getRawValue();
  }
}
