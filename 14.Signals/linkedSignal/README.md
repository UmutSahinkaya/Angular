# Linked Signal (Angular 21)

Bu proje, Angular 21 ile `signal`, `linkedSignal` ve iki yönlü form binding (`ngModel`) kullanımını gösteren basit bir örnektir.

Kullanıcı iki sayı girer, uygulama bu değerleri signal olarak tutar ve toplamı `linkedSignal` ile üretir.

## Amaç

- `signal` ile reaktif durum yönetimini göstermek
- `linkedSignal` ile türetilmiş ama aynı zamanda `set`/`update` alabilen bir signal kullanımını göstermek
- `FormsModule` + `[(ngModel)]` ile input değerlerini signal’lara bağlamak

## Ekran Davranışı

Uygulama şunları içerir:

- 2 adet sayı girişi (`num1`, `num2`)
- Toplam çıktısı: `Sum: {{ total() }}`

`total`, `num1` ve `num2` değiştikçe yeniden hesaplanır.

> Not: Örnek kodda `constructor` içinde `total.set(...)` ve `total.update(...)` kullanımı özellikle gösterilmiştir.

## Teknolojiler

- Angular 21
- TypeScript
- Angular Signals API (`signal`, `linkedSignal`)

## Kurulum

```bash
npm install
```

## Geliştirme Sunucusu

```bash
npm start
```

Ardından tarayıcıda açın:

`http://localhost:4200/`

## Build

```bash
npm run build
```

Build çıktısı `dist/` klasörüne yazılır.

## Test

```bash
npm test
```

## NPM Scriptleri

- `npm start` → geliştirme sunucusu (`ng serve`)
- `npm run build` → üretim build’i
- `npm run watch` → development konfigürasyonu ile watch build
- `npm test` → testleri çalıştırır

## Proje Yapısı (özet)

```text
src/
	app/
		app.ts            # ana bileşen (signal/linkedSignal örneği)
		app.config.ts
		app.routes.ts
	main.ts
	styles.css
```

## Kısa Not

`computed` yalnızca okunabilir türetilmiş değer üretirken, `linkedSignal` belirli senaryolarda türetilmiş değer üzerinde kontrollü `set`/`update` işlemlerine izin verir.
