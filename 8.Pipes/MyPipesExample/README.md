# Pipes

## Pipe Nedir?

**Pipe**, Angular template'lerinde verileri donusturmek icin kullanilan ozel bir yapidir. HTML template'inde gosterilmeden once veriyi belirli bir formata cevirmenizi saglar. Pipe'lar `|` (pipe) sembolu ile kullanilir.

## Ne Ise Yarar?

- **Veri Formatlama**: Tarihleri, sayilari, metinleri kullaniciya uygun formatta gosterme
- **Dil ve Bolge Desteği**: Para birimi, tarih ve sayi formatlarini yerel ayarlara gore gosterme
- **Filtreleme**: Liste verilerini filtreler ve ayiklar
- **Donusum**: Verileri gorunumde kullanilmadan once donusturme
- **Template'de Is Mantigi**: Basit donusum mantigi template icinde kalir

## Nerelerde Kullanilir?

- Tarih ve saat gosterimi (dd/MM/yyyy formatinda)
- Para birimi gosterimi (TL, USD, EUR)
- Buyuk/kucuk harf donusumleri
- JSON verilerini template'de gosterme
- Liste filtreleme
- Yuzde hesaplamalari

## Pipe Turleri

### Built-in (Dahili) Pipes

Angular varsayilan olarak birçok pipe saglar:
- `DatePipe`: Tarihleri formatlar
- `UpperCasePipe` / `LowerCasePipe`: Metin donusumleri
- `CurrencyPipe`: Para birimi gosterimi
- `DecimalPipe`: Sayi formatlama
- `PercentPipe`: Yuzde gosterimi
- `JsonPipe`: JSON objelerini string olarak gosterir

### Custom (Ozel) Pipes

Kendi ihtiyaclariniza gore ozel pipe'lar olusturabilirsiniz. `PipeTransform` interface'ini implement ederek `transform()` metodunu yazarsiniz.

## One Cikan Dosyalar

- `src/app/todo-pipe.ts` (custom pipe ornegi)
- `src/app/app.html` (pipe kullanımları)

## Ornek

### Built-in Pipes Kullanimi

```html
<h1>{{name | titlecase | uppercase | lowercase}}</h1>
<h1>{{date | date:'dd.MMM.yyyy HH:mm:ss'}}</h1>
<h1>{{num | currency:'EUR':'symbol-narrow':'1.2-2'}}</h1>
<h1>{{num | trCurrency:'TRY':false}}</h1>
```

### Custom Pipe Ornegi

```ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {
  transform(value: string[], search: string): string[] {
    if (!search) return value;
    return value.filter((v) => 
      v.toLowerCase().includes(search.toLowerCase())
    );
  }
}
```

### Template'te Custom Pipe Kullanimi

```html
<ul>
  <li *ngFor="let item of todos | todo:searchText">
    {{ item }}
  </li>
</ul>
```

## Pipe Parametreleri

Pipe'lara parametre gecirerek davranislarini ozellestirebilirsiniz:

```html
{{ date | date:'dd/MM/yyyy' }}
{{ price | currency:'USD':'symbol':'1.2-2' }}
```

## Pure vs Impure Pipes

- **Pure Pipes** (varsayilan): Sadece input degeri degistiginde calisir, performansli
- **Impure Pipes**: Her change detection cycle'inda calisir, dikkatli kullanilmali

```ts
@Pipe({
  name: 'myPipe',
  pure: false  // impure pipe
})
```

## Calistirma

```bash
npm install
npm start
```
