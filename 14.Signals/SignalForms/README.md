# SignalForms

Angular 21 ile `@angular/forms/signals` kullanarak hazırlanmış basit bir giriş formu örneği.

## İçerik

Bu projede:

- `signal` tabanlı form state yönetimi
- `form()` ile Signal Form oluşturma
- `required` ve `email` validasyonları
- `FormField` direktifi ile input bağlama

uygulanır.

## Teknolojiler

- Angular `21`
- TypeScript
- Angular Signals
- Angular Signal Forms API (`@angular/forms/signals`)

## Başlangıç

### Gereksinimler

- Node.js (LTS sürümü önerilir)
- npm

### Kurulum

```bash
npm install
```

### Geliştirme Sunucusu

```bash
npm start
```

Uygulama varsayılan olarak `http://localhost:4200` adresinde çalışır.

## NPM Komutları

- `npm start` → geliştirme sunucusunu başlatır (`ng serve`)
- `npm run build` → prod build alır (`ng build`)
- `npm run watch` → development konfigürasyonu ile watch build çalıştırır
- `npm test` → testleri çalıştırır (`ng test`)

## Proje Yapısı

```text
src/
	app/
		app.ts          # Signal form örneği ve validasyonlar
		app.config.ts   # Uygulama konfigürasyonu
	main.ts           # Bootstrap girişi
```

## Not

Bu repo eğitim/deney amaçlı minimal bir örnektir. Form gönderiminde mevcut değerler `console.log` ile yazdırılır.
