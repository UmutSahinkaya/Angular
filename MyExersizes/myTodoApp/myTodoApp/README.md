# MyTodoApp

Bu proje, temel todo uygulamasinin daha genis CRUD destekli versiyonudur. `todoApp` projesinden farkli olarak guncelleme akisi da icerir ve ayri component yapisi denenebilir.

---

## Kapsanan Konular

- `FormsModule` ile iki yonlu veri baglama (`ngModel`)
- Dinamik liste render (`@for`)
- Kosullu goruntuleme (`@if`)
- Ekleme, silme, guncelleme state akisi

---

## State Yapisi

```ts
work: string = '';                      // Yeni todo icin input
updateWork: string = '';                // Guncelleme input degeri
todos: string[] = [];                   // Ana todo listesi
updateIndex: number = 0;               // Guncellenmekte olan indexi tutar
isUpdateWorkForActive: boolean = false; // Guncelleme panelini kontrol eder
```

---

## Metotlar

```ts
// Yeni todo ekle
save() {
  this.todos.push(this.work);
  this.work = '';
}

// Guncelleme modunu ac, mevcut degeri yukle
get(index: number) {
  this.updateWork = this.todos[index];
  this.updateIndex = index;
  this.isUpdateWorkForActive = true;
}

// Guncelleme kaydet
update() {
  this.todos[this.updateIndex] = this.updateWork;
  this.isUpdateWorkForActive = false;
}

// Sil
delete(index: number) {
  this.todos.splice(index, 1);
}
```

---

## Temel Akis

1. Kullanici input'a yazar.
2. "Kaydet" butonuna basin => `save()` cagirilir, dizi guncellenir, input temizlenir.
3. Liste `@for` dongusuyle render edilir.
4. "Duzenle" butonuna basin => `get(index)` cagirilir, guncelleme paneli acilir.
5. Kullanici degisiklik yapar ve "Guncelle" der => `update()` kaydı uzerine yazar.
6. "Sil" butonuna basin => `delete(index)` ilgili elemanı diziden kaldirir.

---

## Calistirma

```bash
cd MyExersizes/myTodoApp/myTodoApp
npm install
npm start
```

Tarayici: `http://localhost:4200/`

---

## Ogrenim Notlari

- `todoApp` ile yapi benzerdir; bu proje `updateWork` isimlendirmesi ve olasi component ayrimi denemeleri icin olusturulmustur.
- `FormsModule` import edilmesi `[(ngModel)]` icin zorunludur.
- `splice(index, 1)` birinci parametrede baslangic noktasini, ikincide kac elemanin silineceğini belirtir.
