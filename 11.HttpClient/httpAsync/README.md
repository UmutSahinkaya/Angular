# HTTP Async ve Routing (Angular HttpClient Eğitimi)

Bu proje, Angular’da `HttpClient` ile asenkron veri çekme, route bazlı detay sayfası ve resolver kullanımı üzerine odaklanan bir eğitim örneğidir.
Liste ekranından detay ekranına geçiş yapılır ve detay verisi route resolver içinde yüklenir.

## Projenin Amacı

- `HttpClient` ile asenkron API çağrısı yapmak
- `lastValueFrom` ile Observable → Promise dönüşümü kullanmak
- Angular Router ile liste / detay akışını kurmak
- Route resolver ile component açılmadan önce veri yüklemek
- Interceptor ile global hata yakalama yaklaşımını görmek

## Öne Çıkan Konular

- `Todo` bileşeninde `async/await` ile veri alma
- `@for` ile todo listesini render etme
- `RouterLink` ile detay sayfasına geçiş
- `withComponentInputBinding()` sayesinde resolver’dan gelen veriyi `@Input()` alanına bağlama
- `error-interceptor.ts` içinde `catchError` ile merkezi hata yönetimi

## Uygulama Akışı

1. `/` rotasında `Todo` bileşeni açılır ve todos listesi API’den çekilir.
2. Her satırdaki **Detail** butonu ile `/:id` rotasına gidilir.
3. Bu rota açılmadan önce resolver ilgili todo kaydını API’den getirir.
4. Gelen veri `TodoDetail` bileşenindeki `todo` input’una otomatik bağlanır.
5. HTTP hataları interceptor’da yakalanır ve konsola yazılır.

## Önemli Dosyalar

- `src/app/todo.ts`  
	Liste bileşeni, asenkron veri çekimi ve route linkleri.

- `src/app/todo-detail.ts`  
	Resolver’dan gelen tekil todo verisinin gösterildiği detay bileşeni.

- `src/app/app.routes.ts`  
	Liste ve detay rotaları + `resolve` fonksiyonu.

- `src/app/error-interceptor.ts`  
	HTTP hatalarını merkezde yakalayan interceptor.

- `src/app/app.config.ts`  
	Router input binding ve interceptor yapılandırması.

## Kullanılan API

- Liste: `https://jsonplaceholder.typicode.com/todos`
- Detay: `https://jsonplaceholder.typicode.com/todos/:id`

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

- Resolver yaklaşımı, sayfa açılmadan veriyi hazır etmek için özellikle detay ekranlarında kullanışlıdır.
- Interceptor şu an hatayı sadece logluyor; gerçek projede kullanıcıya mesaj göstermek için ek bir hata servisiyle genişletilebilir.
