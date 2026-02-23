# Lazy Loading with Layout

Bu proje, Angular 21 ile hem **layout tabanli nested routing** hem de **module bazli lazy loading** (`loadChildren`) yaklasimini bir arada gostermek icin hazirlanmistir. Temel `lazyLoadingApp` projesinin uzerine layout + ic-ice rota yapisi eklenmistir.

---

## Neden Bu Proje?

Basit `loadComponent` ile yapilan lazy loading, tek bir bileseni tembel yukler. Bu proje bir adim ileri giderek:

- Uygulama kabugunun (Navbar + Sidebar + `<router-outlet>`) bir **Layout** bileseniyle yonetildigini,
- Bir modul (veya rota grubu) icindeki birden fazla sayfanin `loadChildren` ile ayni anda lazy olarak yuklenebildigini

gostermektedir.

---

## Proje Yapisi

```
src/
  app/
    app.ts             // Sadece <router-outlet> — tum icerik rota ile geliyor
    app.routes.ts      // Ana rota tanimi: layout lazy, products lazy nested
  pages/
    layout/
      layout.ts        // Navbar + Sidebar + RouterOutlet — shell component
      navbar/
      sidebar/
    home/
      home.ts          // Karin bos anasayfa
    products/
      products.ts      // Urun listesi
      create-product/
        create-product.ts
      router.ts        // Products modul ici rotalar
```

---

## Rota Yapisi ve Lazy Loading Akisi

### Ana rotalar (`app.routes.ts`)

```ts
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/layout/layout'),  // Layout lazy
    children: [
      {
        path: '',
        loadComponent: () => import('../pages/home/home'),  // Home lazy
      },
      {
        path: 'products',
        loadChildren: () => import('../pages/products/router').then(m => m.routes), // Products grubu lazy
      },
    ],
  },
];
```

**Adim adim ne olur:**
1. Kullanici uygulamayi acinca `''` ile eslesen Layout bileseni lazy yukletr.
2. Layout yuklendikten sonra child route olarak `home` gelir, o da ayri chunk'ta tembel yuklenir.
3. Kullanici `/products`'a gittiginde `products/router.ts` dosyasi yuklenir; bu dosya `products` ve `create-product` icin ayri bir rota grubunu tanimlar.

### Products modul rotasi (`pages/products/router.ts`)

```ts
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./products'),           // /products listesi
  },
  {
    path: 'create',
    loadComponent: () => import('./create-product/create-product'), // /products/create
  },
];
```

> `loadChildren` bir array ya da dosya dondurur; burada dosyadan export edilen `routes` dizisi dondurulur. Bu sayede `/products` altindaki tum alt sayfalar ayni lazy chunk'a girer.

---

## Layout Bileseni

`layout.ts` bileseni uygulamanin kabugi gorevini ustlenir:

```ts
@Component({
  imports: [RouterOutlet, Navbar, Sidebar],
  templateUrl: './layout.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Layout {}
```

- `RouterOutlet`: Aktif child route'un bilesenini buraya render eder.
- `Navbar` ve `Sidebar`: Her sayfada sabit kalan kabuk elemanlari.
- `default export`: `loadComponent` ile `default` export kullanimini zorunlu kilar.

---

## `loadComponent` vs `loadChildren` Farki

| | `loadComponent` | `loadChildren` |
|---|---|---|
| Ne yukler? | Tek bir bileseni | Bir rota dizisini (modul gibi) |
| Ne zaman kullanilir? | Tek sayfa | Birden fazla alt sayfa icin |
| Donurtur | `Promise<Component>` | `Promise<Routes>` |
| Ornek | `() => import('./home/home')` | `() => import('./products/router').then(m => m.routes)` |

---

## Calistirma

```bash
cd 13.LazyLoading/LazyLoading-withLayout
npm install
npm start
```

Tarayici: `http://localhost:4200/`

---

## Ogrenim Notlari

- Her `loadComponent` / `loadChildren` cagrisi ayri bir webpack chunk'i olusturur. Bunu `ng build` sonrasinda `dist/` klasorunde gorebilirsiniz.
- Layout lazy olarak yuklendikten sonra child route'lar da lazy kalir; yani `home` acilmadan `products` yuklenmez.
- `ViewEncapsulation.None` burada layout component'in global CSS'i (Navbar, Sidebar stilleri) etkileyebilmesi icin kullanilmistir.
- `ChangeDetectionStrategy.OnPush` ile layout gereksiz render etmez.

---

## Bagli Dokumanlar

- Temel Lazy Loading: [../lazyLoadingApp/README.md](../lazyLoadingApp/README.md)
- Ana repo: [../../README.md](../../README.md)
