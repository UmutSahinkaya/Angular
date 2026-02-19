import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule, JsonPipe],
  template: `
    <main class="container">
      <h1>Angular Forms Playground</h1>
      <p>
        Bu örnek proje <strong>ngModel</strong> ve <strong>FormsModule</strong> kullanımını öğrenmen için hazırlandı.
        Tüm HTML ve stil bu dosyada tutuluyor.
      </p>

      <form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)" novalidate>
        <label>
          Ad Soyad
          <input
            type="text"
            name="fullName"
            required
            minlength="3"
            [(ngModel)]="model.fullName"
            #fullName="ngModel"
          />
        </label>
        @if (fullName.invalid && (fullName.touched || userForm.submitted)) {
          <small>Ad Soyad zorunlu ve en az 3 karakter olmalı.</small>
        }

        <label>
          E-posta
          <input
            type="email"
            name="email"
            required
            email
            [(ngModel)]="model.email"
            #email="ngModel"
          />
        </label>
        @if (email.invalid && (email.touched || userForm.submitted)) {
          <small>Geçerli bir e-posta gir.</small>
        }

        <label>
          Seviye
          <select name="level" [(ngModel)]="model.level">
            @for (level of levels; track level) {
              <option [value]="level">{{ level }}</option>
            }
          </select>
        </label>

        <label class="inline">
          <input type="checkbox" name="newsletter" [(ngModel)]="model.newsletter" />
          Bültene abone ol
        </label>

        <label>
          Not
          <textarea name="note" rows="4" [(ngModel)]="model.note"></textarea>
        </label>

        <div class="actions">
          <button type="submit">Kaydet</button>
          <button type="button" (click)="fillDemoData()">Demo Veri Doldur</button>
          <button type="button" (click)="resetForm(userForm)">Sıfırla</button>
        </div>
      </form>

      <section>
        <h2>Canlı Model (ngModel)</h2>
        <pre>{{ model | json }}</pre>
      </section>

      <section>
        <h2>Son Gönderilen Veri</h2>
        <pre>{{ submittedModel ? (submittedModel | json) : 'Henüz gönderim yok' }}</pre>
        <p>Toplam gönderim: {{ submitCount }}</p>
      </section>
    </main>
  `,
  styles: [
    `
      :host {
        display: block;
        font-family: Arial, Helvetica, sans-serif;
      }

      .container {
        max-width: 760px;
        margin: 24px auto;
        padding: 0 16px 32px;
      }

      form {
        display: grid;
        gap: 12px;
        margin: 16px 0;
        padding: 16px;
        border: 1px solid #ddd;
        border-radius: 8px;
      }

      label {
        display: grid;
        gap: 6px;
        font-weight: 600;
      }

      .inline {
        display: flex;
        gap: 8px;
        align-items: center;
      }

      input,
      select,
      textarea,
      button {
        font: inherit;
        padding: 8px;
      }

      .actions {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }

      small {
        color: #c21f1f;
      }

      pre {
        margin: 8px 0 0;
        padding: 12px;
        border-radius: 8px;
        background: #f7f7f7;
        overflow: auto;
      }
    `,
  ],
})
export class App {
  levels = ['beginner', 'intermediate', 'advanced'];

  model = this.defaultModel();
  submittedModel: typeof this.model | null = null;
  submitCount = 0;

  onSubmit(userForm: NgForm): void {
    if (userForm.invalid) {
      userForm.control.markAllAsTouched();
      return;
    }

    this.submittedModel = { ...this.model };
    this.submitCount += 1;
  }

  fillDemoData(): void {
    this.model = {
      fullName: 'Umut Yılmaz',
      email: 'umut@example.com',
      level: 'intermediate',
      newsletter: true,
      note: 'ngModel ile iki yönlü veri bağlama çalışıyorum.',
    };
  }

  resetForm(userForm: NgForm): void {
    userForm.resetForm(this.defaultModel());
    this.submittedModel = null;
  }

  private defaultModel() {
    return {
      fullName: '',
      email: '',
      level: 'beginner',
      newsletter: false,
      note: '',
    };
  }
}
