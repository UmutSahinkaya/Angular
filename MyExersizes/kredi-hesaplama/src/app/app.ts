import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html'
})
export class App {
  krediTutari:number=0;
  taksitler:number[]=[3,6,9,12,24];
  secilenTaksit:number=3;

  result:string ="";

  hesapla(){
    const taksitTutari = this.krediTutari / this.secilenTaksit *1.29;
    const toplamGeriOdeme = taksitTutari * this.secilenTaksit;
    this.result = `Seçilen Taksit Sayısı: ${this.secilenTaksit}
    Aylık Taksit Tutarı: ${taksitTutari.toFixed(2)} TL
    Toplam Geri Ödeme: ${toplamGeriOdeme.toFixed(2)} TL`;
  }
}
