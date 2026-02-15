# QueryParamsApp

Bu proje, URL query parametreleri ile veri tasimayi ve okumayi gostermek icin hazirlandi.

## Hedefler

- `app.routes.ts` uzerinden route tanimi
- `router-outlet` ile sayfa gosterimi
- `Products` component icinde gelen degerleri gostermek

## One Cikan Dosyalar

- `src/app/products/`
- `src/app/app.routes.ts`

## Ornek

```ts
import { Routes } from '@angular/router';
import { Products } from './products/products';

export const routes: Routes = [
	{ path: 'products', component: Products }
];
```

```ts
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-products',
	templateUrl: './products.html'
})
export class Products {
	@Input() Id: number = 0;
	@Input() Name: string = '';
}
```

Not: Query params okuma/gonderme, bu projede bir sonraki adim olarak eklenebilir.

## Calistirma

```bash
npm install
npm start
```
