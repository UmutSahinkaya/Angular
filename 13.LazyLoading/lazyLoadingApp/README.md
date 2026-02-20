# Lazy Loading App

Bu proje, Angular 21 ile temel route bazli lazy loading mantigini gosteren kucuk bir standalone uygulamadir.

## Ozet

- Standalone component + `loadComponent` kullanimini gosterir.
- Her sayfa ihtiyac aninda yuklenir.
- Basit link navigasyonu uzerinden lazy yukleme davranisi gozlemlenir.

## Uygulanan Yapi

Rotalar `src/app/app.routes.ts` icinde tanimlidir:

- `/home` -> `loadComponent(() => import('./home/home'))`
- `/product` -> `loadComponent(() => import('./product/product'))`
- `/contact` -> `loadComponent(() => import('./contact/contact'))`

Ana navigasyon `src/app/app.ts` dosyasindaki `routerLink` baglantilari ile yapilir. Kullanici hangi route'a giderse sadece ilgili component chunk'i yuklenir.

## Kurulum ve Calistirma

```bash
npm install
npm start
```

Varsayilan adres: `http://localhost:4200/`

## Diger Komutlar

```bash
npm run build
npm test
```

## Klasor Yapisi (Ozet)

```text
src/
  app/
    app.ts
    app.routes.ts
    home/
      home.ts
    product/
      product.ts
    contact/
      contact.ts
```

## Ogrenme Notu

Bu proje, lazy loading konusunun en sade halini gosterir. Bir sonraki adim olarak route guard, preloading stratejileri ve feature klasorleme eklenebilir.
