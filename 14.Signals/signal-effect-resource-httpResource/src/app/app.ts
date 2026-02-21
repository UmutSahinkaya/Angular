import { httpResource } from '@angular/common/http';
import { Component, computed } from '@angular/core';

type Todo = {
  id: number;
  title: string;
};

@Component({
  selector: 'app-root',
  imports: [],
  template: `
  <h4>App Component</h4>
  @if(error()){
    <p>{{error()}}</p>
  }
  @if(loading()){
    <p>Loading...</p>
  }
  @else {
    <ul>
      @for(data of todos();track data.id){
        <li>{{data.title}}</li>
      }
    </ul>
  }
  `,
})
export class App {
  // -------------------------------------------------------------
  // Mini karşılaştırma (yan yana fikir):
  // resource:
  // const result = resource({
  //   loader: async () => await lastValueFrom(http.get<Todo[]>(url))
  // });
  // => HTTP çağrısını SEN yazarsın.
  //
  // httpResource:
  // const result = httpResource<Todo[]>(() => url);
  // => HTTP çağrısını Angular yazar, sen sadece URL/request verirsin.
  // -------------------------------------------------------------

  // resource farkı:
  // - resource'da loader fonksiyonunu ve HTTP çağrısını (HttpClient/fetch) sen yazarsın.
  // - httpResource'da URL/request verirsin; HTTP çağrısını Angular yönetir.
  // - İkisi de value(), isLoading(), error() API'si sunar.
  readonly result = httpResource<Todo[]>(
    // URL bir fonksiyon olduğu için signal/computed ile reaktif hale getirilebilir.
    // Bağımlı signal değişirse istek otomatik yeniden yapılır.
    () => 'https://jsonplaceholder.typicode.com/todos/',
  );

  // result.value() -> başarılı yanıtta gelen veri
  readonly todos = computed(() => this.result.value() ?? []);
  // result.isLoading() -> istek devam ederken true
  readonly loading = computed(() => this.result.isLoading() ?? false);
  // result.error() -> istek hatası varsa dolu olur
  readonly error = computed(() => {
    console.log(this.result.error());

    return this.result.error() ? 'Something went wrong :(  Try again later.' : undefined;
  });
}
