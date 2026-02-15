# KrediHesaplama

Bu proje, temel form kullanimi ve basit hesaplama mantigini uygulamak icin olusturuldu. Girilen degerlere gore kredi odeme bilgileri hesaplanir.

## Hedefler

- Form alanlarindan veri alma
- Basit matematik hesaplamalari
- Sonucu arayuzde gosterme

## One Cikan Dosyalar

- `src/app/app.ts`
- `src/app/app.html`

## Ornek

```ts
krediTutari: number = 0;
taksitler: number[] = [3, 6, 9, 12, 24];
secilenTaksit: number = 3;
result: string = '';

hesapla() {
	const taksitTutari = (this.krediTutari / this.secilenTaksit) * 1.29;
	const toplamGeriOdeme = taksitTutari * this.secilenTaksit;
	this.result = `Secilen Taksit Sayisi: ${this.secilenTaksit}`;
}
```

## Calistirma

```bash
npm install
npm start
```
