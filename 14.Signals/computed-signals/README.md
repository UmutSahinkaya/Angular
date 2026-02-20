# Computed Signals (Angular)

Bu proje, Angular `signal` ve `computed` kullanımını gösteren basit bir örnektir.

## Amaç

İki input alanına girilen sayıları reaktif olarak toplayıp sonucu anlık göstermek.

## Kullanılan Yapılar

- `signal<number>`: `num1` ve `num2` değerlerini tutar.
- `computed(...)`: `total` değerini otomatik hesaplar.
- `[(ngModel)]`: input ile sinyal değerlerini iki yönlü bağlar.

Örnek hesaplama:

```ts
total = computed(() => +this.num1() + +this.num2());
```

Buradaki `+` operatörleri, inputtan gelen string değerleri sayıya çevirir.

## Kurulum

```bash
npm install
```

## Uygulamayı Çalıştırma

```bash
npm start
```

Tarayıcıda aç:

```text
http://localhost:4200/
```

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## Dosya Yapısı

- `src/app/app.ts`: örnek `signal` + `computed` uygulaması
- `src/main.ts`: uygulama başlangıç noktası
- `src/styles.css`: global stiller

## Not

Bu proje eğitim/demonstrasyon amaçlı minimal bir örnektir.
