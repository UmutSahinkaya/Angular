import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
})
export class App {
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
      case 9:
        faizOrani = 1.3;
        break;
      case 12:
        faizOrani = 1.4;
        break;
      case 24:
        faizOrani = 1.5;
        break;
      case 36:
        faizOrani = 1.6;
        break;
      default:
        faizOrani = 1.1;
        break;
    }

    const taksitTutari = (this.krediTutari / this.secilenTaksit) * faizOrani;
    const toplamGeriOdeme = taksitTutari * this.secilenTaksit;
    this.result = `Seçilen Taksit Sayısı: ${this.secilenTaksit}
    Aylık Taksit Tutarı: ${taksitTutari.toFixed(2)} TL
    Toplam Geri Ödeme: ${toplamGeriOdeme.toFixed(2)} TL`;
  }
}
