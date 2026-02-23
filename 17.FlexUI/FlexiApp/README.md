# FlexiApp — flexi-grid Kutuphanesi Demo

Bu proje, Angular 21 uzerinde ucuncu taraf bir Angular kutuphanesi olan **flexi-grid**'i calistirilabilir bir demo seklinde gostermek icin olusturulmustur.

Ana amac: `flexi-grid` paketinin temel ozelliklerini (siralama, filtreleme, sayfalama, kolon yonetimi, tema) gercek verilerle nasil kullanacagini ogrenmek ve hizlica referans alabilmek.

---

## Teknoloji Stack

| Paket | Versiyon |
|---|---|
| Angular | 21.x |
| Angular CLI | 21.0.0 |
| flexi-grid | npm'den yuklendi |
| httpResource | `@angular/common/http` (Angular 21 ile gelen yeni API) |
| Node.js | LTS (20+ onerilir) |
| Paket Yoneticisi | npm |

---

## flexi-grid Nedir?

`flexi-grid`, Angular icin gelistirilmis bir grid (tablo) bilesenidir. Asagidaki ozelliklerle birlikte gelir:

- **Siralama (sorting)**: Kolonlara tiklanarak artan/azalan siralama
- **Filtreleme**: `text`, `number`, `date`, `boolean` turlerinde kolona ozel filtre
- **Sayfalama (pagination)**: Satir sayisi ve sayfa kontrolu
- **Kolon Genisletme (resizable)**: Kolonlarin genisligini surukleyip birakarak ayarlama
- **Kolon Gorünurlugu**: Hangi kolonlarin gozukecegini arayuzdeki menu ile secme
- **Tema**: `light` / `dark` tema destegi
- **Dil**: `tr` / `en` gibi dil ayarlarindan tablo icindeki metinleri localize etme

### Export Edilen Yapilar

```ts
FlexiGridComponent       // Ana grid bileseni
FlexiGridColumnComponent // Kolon bileseni
FlexiGridService         // Grid icin servis
StateModel               // Genel state (filtre + siralama birlikte)
StateSortModel           // Sadece siralama state'i
StateFilterModel         // Sadece filtre state'i
```

---

## Proje Yapisi

```
src/
  app/
    app.ts           // Ana component: httpResource, signal'lar, initialSort/Filter
    app.html         // Template: flexi-grid kullanimi, panel yapisi
    app.css          // Sayfa layout ve panel stilleri
    app.config.ts    // provideHttpClient(withFetch()), provideRouter
    app.routes.ts    // Rota tanimlari
  index.html
  main.ts
  styles.css
```

---

## Temel Implementasyon

### 1) Veri Cekme — `httpResource`

`httpResource`, Angular 21 ile gelen **signal tabanli HTTP API**'dir. `HttpClient` yerine kullanilir ve dogrudan signal dondurur.

```ts
readonly result = httpResource<any[]>(() => {
  return "https://jsonplaceholder.typicode.com/todos";
});

readonly todos   = computed(() => this.result.value()     ?? []);
readonly loading = computed(() => this.result.isLoading());
readonly errorMessage = computed(() => {
  const error = this.result.error();
  if (!error) return '';
  return error instanceof Error ? error.message : 'Beklenmeyen hata';
});
```

- `result.value()` → gelen veriyi tutar (baslangicta `undefined`)
- `result.isLoading()` → istek surerken `true`
- `result.error()` → hata nesnesi, yoksa `null`

### 2) Baslangic Siralama ve Filtre

Tablo ilk acildiginda hangi sirayla ve hangi filtre ile goruntuleneceği `StateSortModel` ve `StateFilterModel` ile tanimlanir:

```ts
readonly initialSort: StateSortModel = {
  field: 'id',
  dir: 'asc'         // 'asc' | 'desc'
};

readonly initialFilters: StateFilterModel[] = [
  {
    field: 'completed',
    value: true,
    operator: 'eq',  // eq | neq | contains | startsWith | gt | lt ...
    type: 'boolean'  // text | number | date | boolean
  }
];
```

### 3) Template — `flexi-grid` Kullanimi

```html
<flexi-grid
  [data]="todos()"
  [loading]="loading()"
  [showIndex]="true"
  [sortable]="true"
  [filterable]="true"
  [pageable]="true"
  [resizable]="true"
  [showColumnVisibility]="true"
  [themeClass]="'light'"
  [language]="'tr'"
  [sort]="initialSort"
  [filter]="initialFilters"
  [height]="'520px'"
  [captionTitle]="'Todo Listesi'"
>
  <flexi-grid-column field="id"        title="Id"         width="90px"  filterType="number"  textAlign="right"></flexi-grid-column>
  <flexi-grid-column field="title"     title="Todo Title" width="380px"></flexi-grid-column>
  <flexi-grid-column field="completed" title="Completed"  width="150px" filterType="boolean"></flexi-grid-column>
  <flexi-grid-column field="userId"    title="UserId"     width="120px" filterType="number"  textAlign="right"></flexi-grid-column>
</flexi-grid>
```

**Onemli Input'lar:**

| Input | Aciklama |
|---|---|
| `[data]` | Tabloya gonderilen veri dizisi |
| `[loading]` | `true` iken grid yuklenme animasyonu gosterir |
| `[sortable]` | Kolon basliklarini tiklanabilir siralama yapar |
| `[filterable]` | Her kolonun altina filtre satiri ekler |
| `[pageable]` | Altta sayfalama kontrolu gosterir |
| `[resizable]` | Kolon genisligini surukleyerek degistirmeye izin verir |
| `[showColumnVisibility]` | Sagda kolon gizleme/gosterme menu butonu cikiyor |
| `[themeClass]` | `'light'` veya `'dark'` |
| `[language]` | `'tr'` veya `'en'` |
| `[sort]` | `StateSortModel` — baslangic siralama |
| `[filter]` | `StateFilterModel[]` — baslangic filtreleri |
| `[height]` | Grid yuksekligi (scroll icin) |
| `[captionTitle]` | Grid baslik yazisi |

### 4) `app.config.ts` — Provider Kurulumu

`httpResource` calisabilmesi icin `provideHttpClient(withFetch())` zorunludur:

```ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(withFetch()),   // withFetch() — modern Fetch API kullanir
    provideRouter(routes)
  ]
};
```

> `withFetch()` olmadan `httpResource` hata verebilir.

### 5) `ViewEncapsulation.None` Kullanimi

Component icinde:

```ts
@Component({
  encapsulation: ViewEncapsulation.None,   // Global CSS ile flexi-grid stillerinin etkilesmesi icin
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

`flexi-grid` kendi stillerini global olarak inject ettiginden, `ViewEncapsulation.None` ile component stillerinin de grid'i etkilemesi saglanir.

---

## Kurulum ve Calistirma

```bash
cd 17.FlexUI/FlexiApp
npm install
npm start
```

Tarayici: `http://localhost:4200/`

### Build

```bash
ng build
```

Uretilen dosyalar `dist/FlexiApp/` klasorune yazilir.

---

## Ogrenim Notlari

- `httpResource` klasik `subscribe()` kullaniminy yerine gecen, signal tabanli daha temiz bir HTTP yaklasimi sunar.
- `computed()` ile `loading`, `error` ve `data` state'leri reaktif olarak turetilir; herhangi bir lifecycle hook gerekmez.
- `flexi-grid` genellikle kurumsal tablo ihtiyaclari icin kullanilir; devextreme veya ag-grid gibi kapsamli alternatiflerin hafif bir versiyonu olarak dusunulebilir.
- `ChangeDetectionStrategy.OnPush` + signal kombinasyonu en yuksek performansi saglar.

---

## Bagli Dokuman

Ana repo ozeti: [../../README.md](../../README.md)
