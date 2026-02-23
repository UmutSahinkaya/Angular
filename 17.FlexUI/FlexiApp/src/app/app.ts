import { httpResource } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, signal, ViewEncapsulation } from '@angular/core';
import { StateFilterModel, StateSortModel } from 'flexi-grid';
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
  readonly errorMessage = computed(() => {
    const error = this.result.error();
    if (!error) {
      return '';
    }

    if (error instanceof Error) {
      return error.message;
    }

    return 'Veri alınırken beklenmeyen bir hata oluştu.';
  });

  readonly packageExports = [
    'FlexiGridComponent',
    'FlexiGridColumnComponent',
    'FlexiGridService',
    'StateModel',
    'StateSortModel',
    'StateFilterModel'
  ];

  readonly featureList = [
    'Sıralama (sorting)',
    'Filtreleme (text / number / date / boolean)',
    'Kolon genişletme (resizable)',
    'Sayfalama (pagination)',
    'Tema (light / dark)',
    'Kolon görünürlük kontrolü'
  ];

  readonly initialSort: StateSortModel = {
    field: 'id',
    dir: 'asc'
  };

  readonly initialFilters: StateFilterModel[] = [
    {
      field: 'completed',
      value: true,
      operator: 'eq',
      type: 'boolean'
    }
  ];
}
