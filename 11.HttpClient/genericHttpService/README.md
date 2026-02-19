# Generic HTTP Service (Angular HttpClient Eğitimi)

Bu proje, Angular `HttpClient` kullanımını daha tekrar edilebilir hale getirmek için yazılmış bir eğitim uygulamasıdır.
Ana hedef, doğrudan `HttpClient` kullanımı yerine ortak bir servis (`HttpService`) üzerinden `GET` / `POST` çağrısı yapmayı ve interceptor ile tüm isteklere merkezi header eklemeyi göstermektir.

## Projenin Amacı

- `HttpClient` ile API çağrısı mantığını anlamak
- Tekrar eden HTTP kodlarını ortak bir servis içinde toplamak
- Fonksiyonel interceptor (`HttpInterceptorFn`) ile request’i merkezi olarak değiştirmek
- Başarı ve hata senaryolarında callback tabanlı akışı görmek

## Öne Çıkan Konular

- `inject(HttpClient)` kullanımı
- Generic metodlar (`get<T>`, `post<T>`) ile tip güvenliği
- Opsiyonel `errorCallback` ile hatayı çağıran katmana bırakma
- `withInterceptors([...])` ile interceptor kaydı
- Request clone edip header ekleme

## Proje Akışı

1. Uygulama açıldığında `App` bileşeni bir `GET` isteği gönderir.
2. İstek, `auth.interceptor-interceptor.ts` içindeki interceptor’dan geçer.
3. Interceptor, isteğe `Authorization` ve `Year` header’larını ekler.
4. Cevap başarılıysa konsola yazılır; hata olursa `HttpErrorResponse` yakalanır.

## Önemli Dosyalar

- `src/app/http.service.ts`  
	Ortak `GET` ve `POST` metodlarını içerir. Callback ve hata callback alır.

- `src/app/auth.interceptor-interceptor.ts`  
	Tüm çıkış isteklerine header ekleyen fonksiyonel interceptor.

- `src/app/app.config.ts`  
	`provideHttpClient(withInterceptors(...))` ile interceptor yapılandırması.

- `src/app/app.ts`  
	Örnek `GET` çağrısını yapan root bileşen.

## Kullanılan API

- `https://jsonplaceholder.typicode.com/todos/`

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

- Bu proje callback tabanlı bir örnek içerir; daha ileri adımda RxJS operatörleri veya `async/await` yaklaşımıyla genişletilebilir.
- Header değerleri eğitim amaçlı sabit yazılmıştır; gerçek projede token yönetimi güvenli bir akışla yapılmalıdır.
