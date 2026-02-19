# Reactive Forms (reactiveformsapp)

Bu proje, Angular'da **Reactive Forms** yaklaşımını temel seviyede göstermek için hazırlanmış bir alıştırmadır.
Amaç, `FormBuilder`, `FormGroup` ve `Validators` ile form doğrulama ve submit akışını yönetmektir.

## Projenin Amacı

- Reactive form yapısını kod tarafında kurmak
- `Validators.required`, `Validators.minLength`, `Validators.email` kullanmak
- Geçersiz form gönderiminde tüm alanları touched yapmak
- Geçerli gönderimde form verisini güvenli şekilde almak

## Öne Çıkan Konular

- `ReactiveFormsModule` ile reactive form altyapısı
- `fb.nonNullable.group(...)` ile tip güvenli form tanımı
- `formControlName` ile input-control eşleştirmesi
- Getter'lar (`name`, `email`) ile template tarafını sade tutma
- `result` alanında son başarılı gönderimi gösterme

## Uygulama Akışı

1. Form başlangıçta `name` ve `email` alanlarıyla oluşturulur.
2. Kullanıcı **Gönder** butonuna bastığında `save()` çalışır.
3. Form geçersizse `markAllAsTouched()` ile hatalar görünür olur.
4. Form geçerliyse `getRawValue()` ile veri alınıp `result` içine yazılır.
5. **Temizle** butonu ile form yeniden boşaltılır.

## Önemli Dosya

- `src/app/app.ts`
	- Form tanımı, validator'lar, submit kontrolü ve sonuç gösterimi bu dosyada.

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
