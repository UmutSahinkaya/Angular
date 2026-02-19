# Template-Driven Forms (formsapp)

Bu proje, Angular'da **Template-Driven Forms** yaklaşımını öğrenmek için hazırlanmış sade bir alıştırmadır.
Amaç, `FormsModule`, `ngModel` ve `NgForm` ile form yönetimini uçtan uca görmek.

## Projenin Amacı

- `ngModel` ile iki yönlü veri bağlama yapmak
- `NgForm` üzerinden form durumunu (`invalid`, `submitted`) yönetmek
- Zorunlu alan, minimum karakter ve e-posta doğrulaması uygulamak
- Form gönderimi, demo veri doldurma ve form sıfırlama akışlarını görmek

## Öne Çıkan Konular

- `[(ngModel)]` ile model güncelleme
- `#userForm="ngForm"` ile form referansı alma
- Alan bazlı validasyon (`required`, `minlength`, `email`)
- Hata mesajlarını `touched` ve `submitted` durumuna göre gösterme
- `JsonPipe` ile canlı model çıktısını izleme

## Uygulama Akışı

1. Kullanıcı form alanlarını doldurur (`fullName`, `email`, `level`, `newsletter`, `note`).
2. Form geçersizse tüm alanlar touched olur ve doğrulama mesajları görünür.
3. Form geçerliyse veri `submittedModel` olarak saklanır ve gönderim sayısı artar.
4. **Demo Veri Doldur** ile örnek veri tek tıkla forma basılır.
5. **Sıfırla** ile form başlangıç değerlerine döner.

## Önemli Dosya

- `src/app/app.ts`
	- Bu alıştırmada template, stil ve form mantığı tek dosyada tutuluyor.

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
