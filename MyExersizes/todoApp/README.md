# TodoApp

Bu proje, Angular ile temel **CRUD** (Create, Read, Update, Delete) islemlerini todo listesi uzerinde pratik etmek icin hazirlanmis bir calisma uygulamasidir.

---

## Kapsanan Konular

- `FormsModule` ile iki yonlu veri baglama (`ngModel`)
- Dizi uzerinde ekleme, silme ve guncelleme
- Kosullu goruntuleme (`@if` / `*ngIf`)
- Liste render etme (`@for` / `*ngFor`)
- Basit durum yonetimi (state) tek component icerisinde

---

## Uygulama Ozellikleri

| Islem | Aciklama |
|---|---|
| Ekle | `work` input'u doluyken Save diyince `todos` dizisine eklenir, input temizlenir |
| Sil | `delete(index)` ile dizi splice edilir |
| Duzenle | `get(index)` guncelleme alanini acar, `update()` kayit uzerine yazar |

---

## State Yapisi

```ts
work: string = '';                  // Yeni todo input baglama
updatework: string = '';            // Guncelleme input baglama
todos: string[] = [];               // Todo listesi
updateIndex: number = 0;            // Guncellenecek item'in indexi
isUpdateWorkForActive: boolean = false; // Guncelleme panelini ac/kapat
```

---

## Metotlar

### Ekleme

```ts
save() {
  this.todos.push(this.work);    // Dizi sonuna ekle
  this.work = '';                // Input'u sifirla
}
```

### Silme

```ts
delete(index: number) {
  this.todos.splice(index, 1);   // Indexten 1 eleman kaldir
}
```

### Duzenleme

```ts
get(index: number) {
  this.updatework = this.todos[index];  // Mevcut degeri al
  this.updateIndex = index;            // Hangi indexi guncelliyoruz?
  this.isUpdateWorkForActive = true;   // Guncelleme panelini ac
}

update() {
  this.todos[this.updateIndex] = this.updatework; // Uzerine yaz
  this.isUpdateWorkForActive = false;             // Paneli kapat
}
```

---

## Template Yapisi

```html
<!-- Ekleme formu -->
<input [(ngModel)]="work" placeholder="Yeni todo..." />
<button (click)="save()">Kaydet</button>

<!-- Liste -->
@for (todo of todos; track $index) {
  <div>
    {{ $index + 1 }}. {{ todo }}
    <button (click)="get($index)">Duzenle</button>
    <button (click)="delete($index)">Sil</button>
  </div>
}

<!-- Guncelleme paneli -->
@if (isUpdateWorkForActive) {
  <input [(ngModel)]="updatework" />
  <button (click)="update()">Guncelle</button>
}
```

---

## Calistirma

```bash
cd MyExersizes/todoApp
npm install
npm start
```

Tarayici: `http://localhost:4200/`

---

## Ogrenim Notlari

- `[(ngModel)]` iki yonlu baglamadır: input degisince component degisir, component degisince input guncellenir. Calisabilmesi icin `FormsModule` import edilmeli.
- `splice(index, 1)` ikinci parametresi kac eleman silineceğini belirtir.
- `isUpdateWorkForActive` flag pattern'i: guncelleme arayuzunu bir boolean ile gostermek/gizlemek Angular'da cok yaygin kullanilir.
- Bu proje daha sonra servise tasinerek `StateManagementWithServices` yaklasimina evrilebilir.
