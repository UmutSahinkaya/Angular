import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  encapsulation:ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  readonly result = httpResource<any[]>(() => {
    return "https://jsonplaceholder.typicode.com/todos"
  });

  readonly todos=computed(() => []);
  readonly loading=computed(() => this.result.isLoading());
}
