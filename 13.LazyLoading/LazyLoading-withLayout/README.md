# Lazy Loading with Layout

Bu proje, Angular 21 ile layout tabanli route yapisinda lazy loading uygulanisini gosterir.

## Ozet

- Ust seviye route'ta ortak bir `Layout` component lazy olarak yuklenir.
- `Layout` altinda `children` rotalari tanimlanir.
- `products` alani icin nested lazy loading (`loadChildren`) kullanilir.
- Sidebar uzerinden route gecisleri yapilir.

## Route Mimarisi

Ana route tanimi `src/app/app.routes.ts` dosyasindadir:

- `path: ''` -> `loadComponent(() => import('../pages/layout/layout'))`
	- child `''` -> `loadComponent(() => import('../pages/home/home'))`
	- child `'products'` -> `loadChildren(() => import('../pages/products/router').then(m => m.routes))`

`products` alt route'lari `src/pages/products/router.ts` dosyasindadir:

- `''` -> `products` listesi
- `'create'` -> urun olusturma sayfasi

## Layout Yapisi

`src/pages/layout/layout.html` icinde ortak iskelet bulunur:

- `app-navbar`
- `app-sidebar`
- `router-outlet`

Bu sayede sayfa iskeleti sabit kalirken icerik bolumu route'a gore degisir.

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
	pages/
		layout/
			layout.ts
			layout.html
			navbar/
			sidebar/
		home/
			home.ts
		products/
			router.ts
			products.ts
			create-product/
				create-product.ts
```

## Ogrenme Notu

Bu proje, hem `loadComponent` hem `loadChildren` kullanan kademeli lazy loading senaryosunu gosterir. Bir sonraki adimda products modulu icin guard/preloading stratejisi eklenebilir.
