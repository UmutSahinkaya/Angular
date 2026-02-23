import { Component, signal } from '@angular/core';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [TranslocoModule],
  template:`
  {{TITLE}}`
})
export class App {
}
