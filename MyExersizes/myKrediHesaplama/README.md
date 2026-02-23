# MyKrediHesaplama

Bu proje, `kredi-hesaplama` calismasinin gelistirilmis versiyonudur. Farkli taksit sayilari icin **farkli faiz oranlari** (`switch-case` ile) uygulanir; bu sayede daha gercekci bir hesaplama modeli elde edilir.

---

## kredi-hesaplama ile Fark

| | kredi-hesaplama | myKrediHesaplama |
|---|---|---|
| Faiz Orani | Sabit `% 29` | Taksit sayisina gore degisken |
| Taksit Secenekleri | 3, 6, 9, 12, 24 | 3, 6, 9, 12, 24, 36 |
| Hesaplama | Tek kural | `switch-case` ile kural tablosu |

---

## Faiz Orani Tablosu

```ts
switch (this.secilenTaksit) {
  case 3:  faizOrani = 1.10; break;   // %10
  case 6:  faizOrani = 1.20; break;   // %20
  default: faizOrani = 1.10; break;   // Diger taksitler icin varsayilan
}
```

> Not: Bu ornek `default` ile eksik case'leri ayni oranda toplar. Gercek projede her `case` ayri tanimlanmali.

---

## Hesaplama Mantigi

```ts
hesapla() {
  let faizOrani = 0;

  switch (this.secilenTaksit) {
    case 3:  faizOrani = 1.10; break;
    case 6:  faizOrani = 1.20; break;
    default: faizOrani = 1.10; break;
  }

  const taksitTutari = (this.krediTutari / this.secilenTaksit) * faizOrani;
  const toplamGeriOdeme = taksitTutari * this.secilenTaksit;

  this.result = `
    Secilen Taksit: ${this.secilenTaksit}
    Aylik Taksit:   ${taksitTutari.toFixed(2)} TL
    Toplam Odeme:   ${toplamGeriOdeme.toFixed(2)} TL
  `;
}
```

---

## State Yapisi

```ts
krediTutari: number = 0;
taksitSayisi: number[] = [3, 6, 9, 12, 24, 36];
secilenTaksit: number = 3;
result: string = '';
```

---

## Calistirma

```bash
cd MyExersizes/myKrediHesaplama
npm install
npm start
```

Tarayici: `http://localhost:4200/`

---

## Ogrenim Notlari

- `switch-case` sabit deger eslesmeleri icin `if-else` yerine okunabilir bir alternatiiftir.
- Faiz oranlarini bir obje (`rateMap`) olarak tutmak daha temiz bir pattern olurdu: `const rateMap: Record<number, number> = { 3: 1.10, 6: 1.20, ... }`.
- Bu proje `kredi-hesaplama` üzerine kuruludur; once o projeye bakmayi onerilir.
