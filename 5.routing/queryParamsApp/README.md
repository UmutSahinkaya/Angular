# Query Params App

Bu proje, Angular'da **URL query parametreleri** (`?key=value`) ile veri tasimayı ve okumayı gostermek icin hazirlanmistir.

---

## Query Params Nedir?

URL'nin `?` isaretinden sonra gelen anahtar-deger ciftleridir:

```
http://localhost:4200/products?Id=5&Name=Laptop
```

- Route path'ini degistirmezler (`/products` sabit kalir).
- Birden fazla deger tasiyabilirler (`&` ile ayrilir).
- Sayfalama, filtreleme, arama gibi ge^icici durum bilgisi icin idealdir.

---

## Route Tanimi

`src/app/app.routes.ts`:

```ts
import { Routes } from '@angular/router';
import { Products } from './products/products';

export const routes: Routes = [
  { path: 'products', component: Products }
];
```

---

## Query Params Okuma — `@Input()` ile (Angular 16+)

Angular 16 ile birlikte `Input()` decorator'u dogrudan query param'i alabilir hale geldi. Bunun icin `AppConfig`'te `withComponentInputBinding()` eklenmesi gerekir:

```ts
// app.config.ts
provideRouter(routes, withComponentInputBinding())
```

```ts
// products.ts
@Component({ selector: 'app-products', ... })
export class Products {
  @Input() Id: number = 0;
  @Input() Name: string = '';
}
```

URL `?Id=5&Name=Laptop` oldugunda Angular `Id` ve `Name` inputlarini otomatik doldurur.

---

## Query Params Gonderme — `routerLink` ile

Template'de:

```html
<a [routerLink]="['/products']" [queryParams]="{ Id: 5, Name: 'Laptop' }">
  Laptop'u Goster
</a>
```

---

## Query Params Gonderme — `Router` servisi ile

```ts
import { Router } from '@angular/router';

const router = inject(Router);

router.navigate(['/products'], {
  queryParams: { Id: 5, Name: 'Laptop' }
});
```

---

## Query Params Okuma — `ActivatedRoute` ile (Eski Yontem)

Angular 16 oncesinde ve `withComponentInputBinding()` kullanilmayan durumlarda:

```ts
import { ActivatedRoute } from '@angular/router';

export class Products {
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const id = params['Id'];
      const name = params['Name'];
    });
  }
}
```

Veya signal tabanli (Angular 17+):

```ts
readonly queryParams = toSignal(inject(ActivatedRoute).queryParams);
```

---

## Query Params vs Route Params Farki

| | Route Params | Query Params |
|---|---|---|
| URL Ornegi | `/products/5` | `/products?Id=5` |
| Tanim | `{ path: 'products/:id' }` | Rota tanimi gerekmez |
| Zorunluluk | Genelde zorunlu | Opsiyonel |
| Kullanim Alani | Kayit detayi (id) | Sayfalama, filtre, arama |

---

## Calistirma

```bash
cd 5.routing/queryParamsApp
npm install
npm start
```

Tarayici: `http://localhost:4200/products?Id=5&Name=Laptop`

---

## Bagli Dokumanlar

- Temel Routing: [../myBasicRouting/README.md](../myBasicRouting/README.md)
- Ana repo: [../../README.md](../../README.md)
