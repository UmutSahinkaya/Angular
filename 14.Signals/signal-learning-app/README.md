# Signal Learning App

Bu proje, **Angular Signals** konusunu pratik etmek için hazırlanmış küçük bir örnek uygulamadır.

## Amaç

Projede şu konular gösterilir:

- `signal` ile reaktif state tanımlama
- `set` ile doğrudan değer atama
- `update` ile mevcut değeri dönüştürerek güncelleme
- `ngModel` ile input alanlarını signal state'e bağlama
- `@for` ile signal içindeki listeyi ekrana basma

## Kullanılan Teknolojiler

- Angular `21`
- TypeScript `5.9`
- Angular Forms (`FormsModule`)

## Projeyi Çalıştırma

1. Bağımlılıkları kur:

```bash
npm install
```

2. Geliştirme sunucusunu başlat:

```bash
npm start
```

3. Tarayıcıdan aç:

`http://localhost:4200/`

## Önemli Dosyalar

- `src/app/app.ts`: Signals örneklerinin olduğu ana bileşen
- `src/main.ts`: Uygulama başlangıç noktası

## Bu Projede Ne Var?

`app.ts` içinde üç farklı signal kullanılır:

- `name`: `string` tipinde tek değer
- `user`: `userModel` tipinde nesne
- `users`: `userModel[]` tipinde liste

Constructor içinde bu signal'ler hem `set` hem `update` ile örneklenir.

Template tarafında:

- Input alanları ile `name` ve `user().name` iki yönlü bağlanır.
- Paragraflarda güncel değerler gösterilir.
- `users()` listesi `@for` ile ekrana basılır.

## Build ve Test

Build almak için:

```bash
npm run build
```

Test çalıştırmak için:

```bash
npm test
```

## Not

Bu proje eğitim amaçlıdır; temel hedef Signals mantığını küçük ve okunabilir bir örnek üzerinden anlatmaktır.
