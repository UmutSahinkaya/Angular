import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, signal, ViewEncapsulation } from '@angular/core';
import { FlexiGridModule } from 'flexi-grid';

@Component({
  selector: 'app-root',
  imports: [FlexiGridModule],
  templateUrl: './app.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  readonly result = httpResource<any[]>(() => {
    return "https://jsonplaceholder.typicode.com/todos"
  });

  readonly todos=computed(() => this.result.value() ?? []);
  readonly loading=computed(() => this.result.isLoading());
}
