# MyKrediHesaplama

Bu proje, kredi hesaplama mantigini farkli bir arayuz ve form akisi ile tekrarlar. Amac, input baglama ve hesaplama sonucunu gosterme pratigi yapmaktir.

## Hedefler

- Form verisiyle hesaplama yapma
- Degisimleri anlik guncelleme
- Kullaniciya okunur sonuc sunma

## One Cikan Dosyalar

- `src/app/app.ts`
- `src/app/app.html`

## Ornek

```ts
krediTutari: number = 0;
taksitSayisi: number[] = [3, 6, 9, 12, 24, 36];
secilenTaksit: number = 3;
result: string = '';

hesapla() {
	let faizOrani = 0;
	switch (this.secilenTaksit) {
		case 3:
			faizOrani = 1.1;
			break;
		case 6:
			faizOrani = 1.2;
			break;
		default:
			faizOrani = 1.1;
			break;
	}

	const taksitTutari = (this.krediTutari / this.secilenTaksit) * faizOrani;
	const toplamGeriOdeme = taksitTutari * this.secilenTaksit;
	this.result = `Secilen Taksit Sayisi: ${this.secilenTaksit}`;
}
```

## Calistirma

```bash
npm install
npm start
```
