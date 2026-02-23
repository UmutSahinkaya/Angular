# State Management with Services

Bu proje, Angular'da **servis tabanli paylasilan state yonetimini** gostermek icin hazirlanmistir. `Common` adli singleton servis, birbirine hiyerarsik olarak bagli olmayan `Navbar` ve `Home` bilesenlerinin ayni `num` verisini paylasmalarini saglar.

---

## Temel Fikir

`@Input/@Output` yalnizca parent-child arasi calisir. Farkli hiyerasik seviyelerdeki veya tamamen bagimsiz bilesenler arasi veri paylasimi icin **servis** kullanilir. Angular'in DI sistemi servisi **Singleton** olarak yonetir; yani tum bilesenler ayni ornege erisir.

---

## Proje Yapisi

```
src/app/
  common.ts          // Paylasilan state: num
  home/
    home.ts          // Increment butonu; common.num'u arttirir
  navbar/
    navbar.ts        // common.num'u gosterir
  layout/
    layout.ts        // Navbar + RouterOutlet kabugu
  app.routes.ts      // Rota tanimlari
```

---

## Paylasilan State Servisi

```ts
// common.ts
@Injectable({ providedIn: 'root' })
export class Common {
  num: number = 0;    // Tum uygulamayi kapsayan paylasilan sayac
}
```

- `providedIn: 'root'` ile Angular bu servisi tum uygulama boyunca tek ornek olarak tutar.
- Herhangi bir bilesen `inject(Common)` veya constructor injection ile bu ornegin kendisine ulasiyor.

---

## Bilesenler

### `home.ts` — State'i Degistirir

```ts
@Component({
  template: `
    <h4>Home Page</h4>
    <p style="color:red;">Number: {{ common.num }}</p>
    <button (click)="increament()">Increment</button>
  `
})
export class Home {
  common = inject(Common);

  increament() {
    this.common.num++;   // Servis icerisindeki num'u arttirir
  }
}
```

### `navbar.ts` — State'i Okur

```ts
@Component({
  template: `
    <h4>Navbar</h4>
    <h4 style="color:blue;">{{ common.num }}</h4>
  `
})
export class Navbar {
  constructor(public common: Common) {}  // Constructor injection
}
```

> Home ve Navbar farkli hiyerarsik konumda (Navbar, Layout icerisinde; Home ise child route). @Input/@Output ile bu iki bileseni baglamak mumkun olmaz. Servis bu kopruyu kurar.

### `layout.ts` — Kabuk

```ts
@Component({
  template: `<app-navbar /> <hr> <router-outlet></router-outlet>`
})
export class Layout {}
```

---

## State Akisi Diyagrami

```
Common Service (num = 0)
  |           |
  |           |
Navbar      Home
(okur)    (arttirir)

  Home'daki butona basilinca:
  common.num++ --> Servis guncellenir --> Navbar aninda yeni degeri goster
```

Angular'in change detection'i servis referansi uzerinden degisikligi algilar ve her iki bilesen de yeniden render olur.

---

## Calistirma

```bash
cd 10.Input-Output-State-Management/StateManagementWithServices
npm install
npm start
```

Tarayici: `http://localhost:4200/`

Home sayfasindaki **Increment** butonuna tiklayinca hem sayfadaki (kirmizi) hem de Navbar'daki (mavi) sayacin ayni anda guncellendigi gorulur.

---

## Ogrenim Notlari

- `providedIn: 'root'` ile servis uygulamanin her yerinden erisilebilir; manuel olarak `providers` dizisine eklemek gerekmez.
- `inject()` fonksiyonu Angular 14+ ile geldi; constructor injection'a modern bir alternatiftir.
- Bu pattern **signal tabanli servise** evriltilerek daha reaktif hale getirilebilir: `num = signal(0)` ve `num.set(...)` / `num.update(...)`.
- Karmasik uygulamalarda bu yontem genisler ve neredeyse **NgRx** veya **Akita** gibi state kutuphanelerinin temel fikrini olusturur.

---

## Bagli Dokumanlar

- Temel Input/Output: [../InputOutputExampleProject/README.md](../InputOutputExampleProject/README.md)
- Input/Output + State: [../InputOutputStateManagement/README.md](../InputOutputStateManagement/README.md)
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
