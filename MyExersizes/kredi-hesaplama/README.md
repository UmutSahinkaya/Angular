# KrediHesaplama

Bu proje, Angular form baglama ve basit matematik mantigini birlestirecek ilk calisma uygulamasidir. Kullanici kredi tutarini ve taksit sayisini secince tahmini aylik odeme ve toplam geri odeme hesaplanir.

---

## Uygulama Ozellikleri

- Kredi tutari girisi (input)
- Taksit sayisi secimi (dropdown: 3, 6, 9, 12, 24)
- Faiz orani: sabit `%29` (`* 1.29`)
- Aylik taksit tutari ve toplam geri odeme hesabi
 - Sonucun arayuzde gosterilmesi

---

## Hesaplama Mantigi

```ts
hesapla() {
  // Faiz dahil aylik taksit: kredi / taksit * 1.29
  const taksitTutari = (this.krediTutari / this.secilenTaksit) * 1.29;
  // Toplam geri odeme: aylik taksit * taksit sayisi
  const toplamGeriOdeme = taksitTutari * this.secilenTaksit;

  this.result = `
    Secilen Taksit Sayisi: ${this.secilenTaksit}
    Aylik Taksit Tutari:   ${taksitTutari.toFixed(2)} TL
    Toplam Geri Odeme:     ${toplamGeriOdeme.toFixed(2)} TL
  `;
}
```

> Not: Gercek kredi hesaplamalarinda bileşik faiz formulu kullanilir; bu proje sadece gorsel mantigi anlamak icin basitlestirilmis sabit faiz orani uzerinden calisir.

---

## State Yapisi

```ts
krediTutari: number = 0;                     // Input ile baglanan kredi miktari
taksitler: number[] = [3, 6, 9, 12, 24];     // Dropdown secenekleri
secilenTaksit: number = 3;                   // Secilen taksit sayisi
result: string = '';                         // Hesaplama sonucu (template'e baglanan)
```

---

## Template Yapisi

```html
<input type="number" [(ngModel)]="krediTutari" placeholder="Kredi tutari" />

<select [(ngModel)]="secilenTaksit">
  @for (t of taksitler; track t) {
    <option [value]="t">{{ t }} Taksit</option>
  }
</select>

<button (click)="hesapla()">Hesapla</button>

<p>{{ result }}</p>
```

---

## Calistirma

```bash
cd MyExersizes/kredi-hesaplama
npm install
npm start
```

Tarayici: `http://localhost:4200/`

---

## Ogrenim Notlari

- `[(ngModel)]` number input ile kullanildiginda deger `string` olarak gelebilir; tip uyumsuzluklarini onlemek icin `type="number"` HTML attribute'u veya `+this.krediTutari` donusumu kullanilabilir.
- `toFixed(2)` sayiyi iki ondalik basamakla stringe cevirir.
- `select + ngModel` kombinasyonu dropdown secimini kolayca baglamaya olanak verir.
