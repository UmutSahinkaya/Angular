# TodoApp

Bu proje, temel todo uygulamasi uzerinden liste ve event islemlerini pekistirir.

## Hedefler

- Liste gosterimi ve filtreleme
- Input baglama
- Item silme veya tamamlandi olarak isaretleme

## One Cikan Dosyalar

- `src/app/app.ts`
- `src/app/app.html`

## Ornek

```ts
work: string = '';
updatework: string = '';
todos: string[] = [];
updateIndex: number = 0;
isUpdateWorkForActive: boolean = false;

save() {
	this.todos.push(this.work);
	this.work = '';
}

delete(index: number) {
	this.todos.splice(index, 1);
}
```

## Calistirma

```bash
npm install
npm start
```
