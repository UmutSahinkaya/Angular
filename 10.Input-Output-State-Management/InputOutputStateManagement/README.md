# Input / Output State Management

Bu proje, `@Input` ve `@Output` ile parent-child bilesenler arasinda **iki yonlu veri akisini** gostermek icin hazirlanmistir. `Products` parent ozeldir: hem veriyi asagiya yollar hem de child'dan gelen event ile kendi state'ini gunceller.

---

## Senaryo

- `Products` (parent): `name` state'ini tanimlar ve `List` alt bilesenine iletir.
- `List` (child): input'u iki tarafli baglar, kaydet'e basilinca emit eder.
- Parent yeni degeri alir ve `name`'ini gunceller; bu guncelleme `List`'e tekrar yansir.

---

## Proje Yapisi

```
src/app/
  list.ts       // @Input + @Output: form ve event emitter
  products.ts   // Parent: name state'i, List'i baglar
  app.routes.ts // /products rotasina yonlendirme
```

---

## Temel Kod

### `list.ts` — Alt Bilesen

```ts
@Component({
  selector: 'app-list',
  imports: [FormsModule],
  template: `
    <h2>List</h2>
    <input [(ngModel)]="name" />
    <button (click)="save()">Save</button>
  `
})
export class List {
  @Input()  name: string = '';             // Parent'tan gelen deger
  @Output() myEvent = new EventEmitter<string>(); // Parent'a gonderilecek event

  save() {
    this.myEvent.emit(this.name);           // Input degerini yukari gonder
  }
}
```

### `products.ts` — Parent Bilesen

```ts
@Component({
  selector: 'app-products',
  imports: [List],
  template: `
    <h2>Products Component</h2>
    <p>{{ name }}</p>
    <app-list [name]="name" (myEvent)="save($event)"></app-list>
  `
})
export class Products {
  name: string = 'Umut';          // Baslangic state'i

  save(event: any) {
    this.name = event;             // Child'dan gelen yeni degeri kaydet
  }
}
```

---

## Veri Akisi

```
Products (parent)
  |
  |-- [name]="name"     -------->  List (child)   // @Input: asagiya
  |-- (myEvent)="save($event)" <-- List (child)   // @Output: yukari
  |
  name state guncellenir --> tekrar [name] ile asagiya akis devam eder
```

Bu dongusel akis sayesinde:
1. Parent `name = 'Umut'` ile baslar ve List'e iletir.
2. Kullanici input'u degistirir (ngModel ile local state guncellenir).
3. Save'e basilinca event emit edilir, parent `name`'i gunceller.
4. Guncellenen `name` yeniden `[name]` binding ile List'e iner.

---

## `InputOutputExampleProject` ile Fark

| | InputOutputExampleProject | InputOutputStateManagement |
|---|---|---|
| Senaryo | Calisan ekleme + listeleme | Tek deger iki yonlu guncelleme |
| Input Tipi | Obje (`Employee`) | String (`name`) |
| Alt Bilesen Sayisi | 2 (Create + List) | 1 (List) |
| Amac | CRUD benzeri toplama | Iki yonlu veri dongusu |

---

## Calistirma

```bash
cd 10.Input-Output-State-Management/InputOutputStateManagement
npm install
npm start
```

Tarayici: `http://localhost:4200/products`

---

## Ogrenim Notlari

- `[(ngModel)]`, `@Input()` ile gelen degeri otomatik gunceller; bu iki yonlu baglama hem parent'tan gelen degeri gosterir hem de kullanicinin degistirmesine izin verir.
- `EventEmitter`'in emittedigi deger event handler'a `$event` olarak gelir.
- Bu pattern kucuk form parcaciklari icin uygundur; buyuk uygulamalarda servis veya signal tabanli state yonetimi tercih edilmeli.

---

## Bagli Dokumanlar

- Temel Input/Output: [../InputOutputExampleProject/README.md](../InputOutputExampleProject/README.md)
- Service State: [../StateManagementWithServices/README.md](../StateManagementWithServices/README.md)
- Ana repo: [../../README.md](../../README.md)

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
