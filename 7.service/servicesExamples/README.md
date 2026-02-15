# Services

## Services Nedir?

Angular'da **Service**, uygulamaniz icindeki veri ve is mantigini yoneten, bagimsiz ve yeniden kullanilabilir siniflardir. Component'lar arasinda veri paylasimi, HTTP istekleri, business logic ve diger yardimci islemler icin kullanilir.

## Ne Ise Yarar?

- **Veri Paylasimi**: Component'lar arasinda ortak veri ve state yonetimi
- **Kod Tekrari Onleme**: Ortak islevi tek bir yerde tutarak DRY (Don't Repeat Yourself) prensibine uyum
- **HTTP Istekleri**: API'lerden veri cekme ve gonderme
- **Business Logic**: Component'lardan is mantigini ayirarak daha temiz kod yapisina kavusma
- **Dependency Injection**: Angular'in DI sistemiyle servisler otomatik enjekte edilir

## Nerelerde Kullanilir?

- Kullanici kimlik dogrulama (authentication)
- Veri tabanina erisim (HTTP servisleri)
- Component'lar arasi iletisim
- Loglama ve hata yonetimi
- Ortak yardimci fonksiyonlar
- State management

## Service Yapisi

Bir service, `@Injectable()` decorator'u ile isaretlenir ve genellikle `providedIn: 'root'` ile uygulamanin her yerinden erisilebilir hale gelir.

## One Cikan Dosyalar

- `src/app/services/example.ts`

## Ornek

```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  work: string = '';
  todos: string[] = [];

  constructor() {}

  save() {
    this.todos.push(this.work);
    this.work = '';
  }
}
```

### Component'ta Kullanimi

```ts
import { Component } from '@angular/core';
import { ExampleService } from './services/example';

@Component({
  selector: 'app-root',
  templateUrl: './app.html'
})
export class App {
  constructor(private exampleService: ExampleService) {}

  addTodo() {
    this.exampleService.save();
  }
}
```

## Avantajlari

- **Singleton Pattern**: Varsayilan olarak uygulama genelinde tek bir ornek olusturulur
- **Testability**: Service'leri kolayca mock edebilir ve test edebilirsiniz
- **Separation of Concerns**: Component'lari sadece gorunum ile ilgilendirir
- **Reusability**: Ayni service birden fazla component'ta kullanilabilir

## Calistirma

```bash
npm install
npm start
```
