# Angular Signals Learning Lab

Bu repo tek bir Angular projesi içinde şu 3 konuyu adım adım anlatmak için kullanılır:

1. `effect`
2. `resource`
3. `httpResource`

Amaç: Her konu için yeni proje açmadan, aynı proje içinde ilerlemek ve her adımı commit/tag ile versiyonlamak.

## Çalışma Akışı (Önerilen)

Her konu için aynı döngüyü uygula:

1. `src/app/app.ts` içinde konuyu örnekle.
2. README'de ilgili bölümde kısa not + ne gösterdiğini güncelle.
3. Commit at.
4. İstersen o commit'i tag'le.
5. Sonraki konuya geçerken `app.ts`'i sadeleştirip yeni konuyu yaz.

### Commit / Tag Stratejisi

Örnek commit mesajları:

- `feat(effect): basic signal + effect example`
- `feat(resource): async resource with loading/error states`
- `feat(httpresource): fetch users via httpResource`

Örnek tag'ler:

- `lesson/effect`
- `lesson/resource`
- `lesson/httpresource`

Bu sayede geçmişteki her anlatımı tek komutla açabilirsin:

```bash
git checkout lesson/effect
```

## Ders İlerleme Durumu

- [x] Effect
- [ ] Resource
- [ ] httpResource

> Bu checklist her adımda güncellenecek.

## Konu Notları

### 1) Effect

- Hedef: signal değiştiğinde yan etkinin nasıl çalıştığını göstermek.
- Dosya: `src/app/app.ts`
- Durum: Tamamlandı

### 2) Resource

- Hedef: asenkron veri akışını `resource` ile yönetmek (`loading`, `value`, `error`).
- Dosya: `src/app/app.ts`
- Durum: Sıradaki adım

### 3) httpResource

- Hedef: HTTP üzerinden veri çekimini `httpResource` ile göstermek.
- Dosya: `src/app/app.ts`
- Durum: Planlandı

## Projeyi Çalıştırma

```bash
npm install
npm start
```

Uygulama: `http://localhost:4200`

## Not

Bu repo bir "öğrenme günlüğü" gibi ilerler. Her commit bir mini ders snapshot'ıdır.
