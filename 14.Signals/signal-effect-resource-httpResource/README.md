# Angular Signals / Resource / httpResource Öğrenme Projesi

Bu proje, Angular Signals ekosistemini adım adım öğrenmek için kullanılan bir eğitim repo’sudur. İçerik tek bir uygulama üzerinde ilerler ve her aşama commit geçmişinde korunur.

## Amaç

- `signal`, `computed`, `effect`, `linkedSignal`
- `resource` ve `httpResource`
- `input()`, `output()`, `viewChild()` gibi yeni Angular API’leri

Bu yaklaşım sayesinde tek bir proje içinde konu değiştirip commitler üzerinden geçmiş ders anlarına geri dönebilirsin.

## Teknoloji Yığını

- Angular `^21.0.0`
- TypeScript `~5.9.2`
- RxJS `~7.8.0`

## Projeyi Çalıştırma

```bash
npm install
npm start
```

Uygulama varsayılan olarak `http://localhost:4200` üzerinde açılır.

## Test

```bash
npm test
```

## Proje Yapısı

Önemli dosyalar:

- `src/app/app.ts`: Ana örnek akışları
- `src/app/test.ts`: `input`, `output`, `linkedSignal` örnekleri
- `src/app/app.config.ts`: `provideHttpClient` dahil uygulama sağlayıcıları

## Güncel Durum

Bu branch’in güncel halinde `app.ts` içinde Input/Output/ViewChild odaklı örnek bulunmaktadır. `resource` ve `httpResource` örnekleri commit geçmişinde yer alır.

## Commit Geçmişi (Özet)

Aşağıdaki commitler proje öğrenme akışını gösterir (en yeniden eskiye):

1. `de0e03d` — Input, output, viewChild kullanımı
2. `74061f8` — `httpResource` kullanımı
3. `f66829d` — resource sonrası güncelleme
4. `e5b31dc` — `resource` kullanımından sonra
5. `92b67d3` — `resource` kullanımından önce hazırlık
6. `c943ece` — `effect` kullanımı
7. `16931da` — bu öğrenme projesinin temel başlangıcı
8. `7c158dc` — README eklendi
9. `6cbbf01` — `linkedSignal` kullanımı
10. `4f66c13` — `computed` kullanımı

> Not: Commit mesajlarında Türkçe karakter kodlaması geçmişe bağlı olarak terminalde bozuk görünebilir; hash’ler doğrudur.

## Geçmiş Bir Derse Dönme

Belirli bir konu snapshot’ını açmak için:

```bash
git checkout 74061f8
```

Tekrar güncel branch’e dönmek için:

```bash
git switch -
```

## Önerilen Çalışma Biçimi

1. Konuyu `app.ts` veya `test.ts` içinde uygula.
2. README’de kısa not düş.
3. Anlamlı bir commit mesajı ile kaydet.

Bu repo bir “öğrenme günlüğü” olarak tasarlanmıştır; her commit mini ders snapshot’ı gibi kullanılabilir.
