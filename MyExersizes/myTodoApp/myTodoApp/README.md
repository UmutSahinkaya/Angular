# MyTodoApp

Bu proje, basit bir todo uygulamasi ile liste islemleri (ekleme, silme, tamamlama) pratigi yapar.

## Hedefler

- `ngFor` ile listeleme
- Input baglama ve ekleme
- Basit item silme/tamamlama

## One Cikan Dosyalar

- `src/app/app.ts`
- `src/app/app.html`

## Ornek

```ts
work: string = '';
updateWork: string = '';
todos: string[] = [];
updateIndex: number = 0;
isUpdateWorkForActive: boolean = false;

save() {
	this.todos.push(this.work);
	this.work = '';
}

get(index: number) {
	this.updateWork = this.todos[index];
	this.updateIndex = index;
	this.isUpdateWorkForActive = true;
}
```

## Calistirma

```bash
npm install
npm start
```
