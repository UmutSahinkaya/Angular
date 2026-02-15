# Angular

Bu repo, Angular calismalarimi konu konu takip etmek icin tutuluyor. Her konu ayri bir alt projede durur ve detaylar ilgili alt README dosyalarinda yer alir.

## Konular (Detaylar Alt README'lerde)

### Routing
- Routing (Temel): [5.routing/myBasicRouting/README.md](5.routing/myBasicRouting/README.md)
- Query Params: [5.routing/queryParamsApp/README.md](5.routing/queryParamsApp/README.md)

### Directives
- Directives: [6.directive/directives/README.md](6.directive/directives/README.md)

### Services
- Services: [7.service/servicesExamples/README.md](7.service/servicesExamples/README.md)

### Pipes
- Pipes: [8.Pipes/MyPipesExample/README.md](8.Pipes/MyPipesExample/README.md)

### Guards
- Guards: [9.Guards/myGuards/README.md](9.Guards/myGuards/README.md)

### Basic Exercises
- Kredi Hesaplama: [MyExersizes/kredi-hesaplama/README.md](MyExersizes/kredi-hesaplama/README.md)
- Kredi Hesaplama (Alternatif): [MyExersizes/myKrediHesaplama/README.md](MyExersizes/myKrediHesaplama/README.md)
- Todo App: [MyExersizes/todoApp/README.md](MyExersizes/todoApp/README.md)
- Todo App (Alternatif): [MyExersizes/myTodoApp/myTodoApp/README.md](MyExersizes/myTodoApp/myTodoApp/README.md)
- Base App (Referans): [MyExersizes/my-app/README.md](MyExersizes/my-app/README.md)

## Branch Kullanimi

- Her konu icin yeni branch: `git checkout -b konu-adi`
- Bitince push: `git push -u origin konu-adi`

## Sonraki Konular (Planlanan)

- Component lifecycle
- Forms (Template-driven, Reactive)
- HttpClient ve API entegrasyonu
- Advanced routing
- State management temelleri
- Testing (unit, e2e)

## Calistirma

Her alt proje ayri bir Angular uygulamasidir. Ornek calistirma:

```bash
cd 5.routing/myBasicRouting
npm install
npm start
```
