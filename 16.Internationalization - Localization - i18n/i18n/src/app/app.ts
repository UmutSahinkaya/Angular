import { Component, inject, signal } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [TranslocoModule],
  template: `
    <ng-container *transloco="let t">
      <h1>{{ t('TITLE') }}</h1>
      <button (click)="changeLang('tr')">{{ t('LANGUAGE.TR') }}</button>
      <button (click)="changeLang('en')">{{ t('LANGUAGE.EN') }}</button>
    </ng-container>
  `,
})
export class App {
  readonly #transloco = inject(TranslocoService);

  constructor() {
    const lang = localStorage.getItem('lang') || 'en';
    this.#transloco.setActiveLang(lang);
  }

  changeLang(lang: string) {
    this.#transloco.setActiveLang(lang);
    localStorage.setItem('lang', lang);
  }
}
