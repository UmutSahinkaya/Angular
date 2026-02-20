# Angular Lazy Loading Örneği

Bu proje, Angular 21 ile route bazlı lazy loading (tembel yükleme) konusunu göstermek için hazırlanmış basit bir örnektir.

## Amaç

- Her sayfanın ayrı bir dosyadan yalnızca ihtiyaç anında yüklenmesini göstermek
- Uygulamanın ilk açılış paket boyutunu azaltma mantığını anlatmak
- `loadComponent` ile modern Angular standalone yaklaşımını kullanmak

## Projede Lazy Loading Nasıl Uygulandı?

Rotalar `src/app/app.routes.ts` dosyasında tanımlıdır ve her route için `loadComponent` kullanılır:

- `/home`  → `./home/home`
- `/product` → `./product/product`
- `/contact` → `./contact/contact`

Bu sayede kullanıcı yalnızca gezdiği sayfanın bileşenini indirir.

## Navigasyon

Ana linkler `src/app/app.ts` içinde yer alır:

- Home
- Product
- Contact

Kullanıcı bu linklerden birine tıkladığında ilgili bileşen lazy olarak yüklenir.

## Kurulum

```bash
npm install
```

## Geliştirme Sunucusu

```bash
npm start
```

Uygulama varsayılan olarak şu adreste açılır:

`http://localhost:4200/`

## Build Alma

```bash
npm run build
```

Çıktılar `dist/` klasörüne üretilir.

## Test

```bash
npm test
```

## Klasör Yapısı (Özet)

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

## Not

Bu proje eğitim amaçlı minimum bir örnektir. İstenirse bir sonraki adımda feature bazlı klasörleme ve lazy-loaded route guard örnekleri eklenebilir.
