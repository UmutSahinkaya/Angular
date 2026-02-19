# My App - Temel HttpClient Kullanımı

Bu proje, Angular `HttpClient` ile temel `GET` ve `POST` işlemlerini öğrenmek için hazırlanmış başlangıç seviyesinde bir eğitim uygulamasıdır.
Odak noktası; header gönderimi, hata yakalama ve `inject(HttpClient)` kullanımını net şekilde göstermektir.

## Projenin Amacı

- Angular’da `HttpClient` servisini kullanmayı öğrenmek
- `GET` ile liste çekme ve `POST` ile kayıt gönderme akışını görmek
- İsteklerde özel header kullanımı (`Authorization`, `Content-Type`, vb.)
- `HttpErrorResponse` ile hata yönetimi yapmak

## Öne Çıkan Konular

- Constructor yerine `inject(HttpClient)` yaklaşımı
- `options` nesnesi ile header (ve opsiyonel query params) geçme
- `subscribe({ next, error })` yapısıyla cevap/hata ayrımı
- `jsonplaceholder` API’si ile örnek entegrasyon

## Uygulama Davranışı

1. Uygulama açıldığında `get()` metodu çalışır.
2. Todos verisi API’den çekilir ve `todos` dizisine atanır.
3. `post()` metodu çağrıldığında API’ye yeni todo verisi gönderilir.
4. Başarılı yanıtta konsola mesaj yazılır, hata durumunda hata nesnesi loglanır.

## Önemli Dosyalar

- `src/app/app.ts`  
	`GET` / `POST`, header ayarları ve hata yönetiminin olduğu ana eğitim dosyası.

- `src/app/app.config.ts`  
	`provideHttpClient()` ile HttpClient’in global olarak sağlandığı konfigürasyon.

## Kullanılan API

- `GET`: `https://jsonplaceholder.typicode.com/todos`
- `POST`: `https://jsonplaceholder.typicode.com/todos`

## Kurulum ve Çalıştırma

```bash
npm install
npm start
```

Tarayıcı: `http://localhost:4200`

## Ek Komutlar

```bash
npm run build
npm test
```

## Eğitim Notları

- Bu proje temel seviyedir; `service` katmanı ve interceptor eklenerek daha kurumsal bir yapıya taşınabilir.
- `options` içinde yorum satırı olarak bırakılan `HttpParams` kısmı, filtreli istekler için iyi bir sonraki adımdır.
