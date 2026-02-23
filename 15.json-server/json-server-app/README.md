# json-server + Angular Demo

Bu proje, gelistirme ortaminda hizli bir **sahte REST API** olarak `json-server`'i kullanmayi ogretmek icin hazirlanmistir. Angular uygulamasi `HttpClient` ile bu API'ye `GET` ve `POST` istekleri atar; veriler signal tabanli state ile yonetilir.

---

## json-server Nedir?

`json-server`, sadece bir JSON dosyasi (`db.json`) ile cahsen dakikalar icinde eksiksiz bir REST API ayaga kaldirabileceginiz bir npm paketidir. Gercek bir backend olmadan Angular HTTP calismalarini test etmek icin idealdir.

**Desteklenen endpoint'ler (`/posts` icin ornek):**

| Metot | URL | Aciklama |
|---|---|---|
| GET | `/posts` | Tum kayitlar |
| GET | `/posts/:id` | Tek kayit |
| POST | `/posts` | Yeni kayit ekle |
| PUT | `/posts/:id` | Kaydı tamamen guncelle |
| PATCH | `/posts/:id` | Kismi guncelleme |
| DELETE | `/posts/:id` | Kayit sil |

---

## Kurulum

### 1) json-server'i Global Yukle

```bash
npm install -g json-server
```

### 2) db.json Olustur

Proje kokunde veya farkli bir klasorde bir `db.json` olustur:

```json
{
  "posts": [
    { "id": "1", "title": "Angular Basics", "views": "100" },
    { "id": "2", "title": "TypeScript Tips", "views": "200" }
  ]
}
```

### 3) json-server'i Baslat

```bash
json-server --watch db.json --port 3000
```

API adresi: `http://localhost:3000/posts`

> `--watch` sayesinde `db.json` degisince server kendini yeniler.

### 4) Angular Uygulamasini Baslat (Ayri terminalde)

```bash
npm install
npm start
```

Tarayici: `http://localhost:4200/`

> Once `json-server`'i, sonra Angular'i baslatmayi unutma.

---

## Uygulama Yapisi

```
src/app/
  app.ts      // GET ve POST istekleri, signal ile state yonetimi
```

---

## Temel Kod

### `app.ts`

```ts
@Component({
  template: `
    <button (click)="get()">Get</button>
    <button (click)="post()">Post</button>
    <ul>
      @for (val of posts(); track val.id) {
        <li>{{ val.id }} - {{ val.views }} - {{ val.title }}</li>
      }
    </ul>
  `,
})
export class App {
  readonly posts = signal<any[]>([]);
  readonly #http = inject(HttpClient);

  post() {
    const data = {
      id: Math.random().toString(16).slice(2),
      title: Math.random().toString(16).slice(2),
      views: Math.random().toString(16).slice(2),
    };
    this.#http.post('http://localhost:3000/posts', data)
      .subscribe(() => this.get());   // POST sonrasi listeyi yenile
  }

  get() {
    this.#http.get<any[]>('http://localhost:3000/posts').subscribe({
      next: (res) => this.posts.set(res),
      error: (err: HttpErrorResponse) => console.error(err),
    });
  }
}
```

**Dikkat edilecek noktalar:**
- `signal<any[]>([])` ile baslangic state'i bos dizi.
- `POST` bittikten sonra `subscribe` callback'inde `get()` cagrisi yapiliyor — bu listenin guncellenmesini saglar.
- `HttpErrorResponse` import'u ile HTTP hatalari tip-guvenli yakalanir.

### `app.config.ts`

```ts
providers: [
  provideHttpClient(withFetch()),
  provideRouter(routes)
]
```

> `provideHttpClient(withFetch())` HTTP isteklerinin modern Fetch API ile yapilmasini saglar.

---

## json-server Notlari

- `db.json` dosyasi json-server'in "veritabani"dir; her `POST/PUT/DELETE` bu dosyayi gunceller.
- json-server'in `4.x` surumunden itibaren `--watch` yerine `json-server db.json` yeterli olabilir.
- CORS varsayilan olarak aciktir; Angular dev server'dan istek atmak icin ekstra ayar gerekmez.
- Sahte gecikme eklemek icin: `json-server --watch db.json --delay 500`

---

## Ogrenim Notlari

- Bu proje, `HttpClient`'i signal ile birlestirmenin en minimal ornegini gosteriyor.
- Gercek projede `HttpClient` cagrisi bir servis icerisinde yapilir; component dogrudan inject etmez.
- `httpResource` (Angular 21+) bu patternin daha modern ve reaktif halidir — bakiniz `14.Signals` ve `17.FlexUI` projeleri.

---

## Bagli Dokumanlar

- Ana repo: [../../README.md](../../README.md)
