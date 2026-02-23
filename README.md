# Angular

Bu repo, Angular calismalarini konu konu takip etmek icin tutuluyor. Her konu ayri bir alt projede durur ve detaylar ilgili alt README dosyalarinda yer alir.

## Guncel Durum (main)

- Son eklenen konu: **17. FlexUI** (`17.FlexUI/FlexiApp`)
- Kapsanan konular: Routing, Directives, Services, Pipes, Guards, Input/Output, HttpClient, Forms, Lazy Loading, Signals, json-server, i18n, FlexUI
- Her konu icin ayri git branch kullanildi; tamamlananlar `main`'e merge edildi.

## Konular ve Projeler

### 5. Routing
- Routing (Temel): [5.routing/myBasicRouting/README.md](5.routing/myBasicRouting/README.md)
	- `app.routes.ts`, layout tabanli child route, sayfa gecisi (`home`, `about`, `contact`, `:params`).
- Query Params: [5.routing/queryParamsApp/README.md](5.routing/queryParamsApp/README.md)
	- URL `?key=value` ile veri tasima; `@Input()` ve `ActivatedRoute` ile okuma.

### 6. Directives
- Directives: [6.directive/directives/README.md](6.directive/directives/README.md)
	- Attribute directive yazimi, `@HostListener`, `ElementRef` ile DOM etkilesimi.

### 7. Services
- Services: [7.service/servicesExamples/README.md](7.service/servicesExamples/README.md)
	- `@Injectable`, `providedIn: 'root'`, Singleton pattern, DI sistemi.

### 8. Pipes
- Pipes: [8.Pipes/MyPipesExample/README.md](8.Pipes/MyPipesExample/README.md)
	- Built-in pipes (`DatePipe`, `CurrencyPipe`...) ve `PipeTransform` ile custom pipe.

### 9. Guards
- Guards: [9.Guards/myGuards/README.md](9.Guards/myGuards/README.md)
	- `CanActivateFn` (login koruma), `CanDeactivateFn` (form kayip uyarisi).

### 10. Input / Output / State Management
- Input-Output Example: [10.Input-Output-State-Management/InputOutputExampleProject/README.md](10.Input-Output-State-Management/InputOutputExampleProject/README.md)
	- `@Output` + `EventEmitter` ile child→parent, `@Input` ile parent→child; calisan kayit formu.
- Input-Output + State: [10.Input-Output-State-Management/InputOutputStateManagement/README.md](10.Input-Output-State-Management/InputOutputStateManagement/README.md)
	- Bilesenler arasi veri paylasimi ve durum takibi.
- State with Services: [10.Input-Output-State-Management/StateManagementWithServices/README.md](10.Input-Output-State-Management/StateManagementWithServices/README.md)
	- Servis tabanli state yonetimi yaklasimi.

### 11. HttpClient
- Generic Http Service: [11.HttpClient/genericHttpService/README.md](11.HttpClient/genericHttpService/README.md)
	- Generic `get<T>/post<T>` metodlari ve interceptor ile header yonetimi.
- Http Async: [11.HttpClient/httpAsync/README.md](11.HttpClient/httpAsync/README.md)
	- Async veri cekme, route resolver ve global hata yakalama.
- HttpClient Basic App: [11.HttpClient/my-app/README.md](11.HttpClient/my-app/README.md)
	- Minimal `HttpClient` kullanimi referans projesi.

### 12. Forms
- Template-Driven Forms: [12.Forms/formsapp/README.md](12.Forms/formsapp/README.md)
	- `ngModel`, form kontrolleri, dogrulama ve submit akisi.
- Reactive Forms: [12.Forms/reactiveformsapp/README.md](12.Forms/reactiveformsapp/README.md)
	- `FormGroup`, `FormControl`, validator ve form model yonetimi.

### 13. Lazy Loading
- Lazy Loading (Basic): [13.LazyLoading/lazyLoadingApp/README.md](13.LazyLoading/lazyLoadingApp/README.md)
	- `loadComponent` ile modern standalone lazy loading, paket boyutu azaltma.
- Lazy Loading with Layout: [13.LazyLoading/LazyLoading-withLayout/README.md](13.LazyLoading/LazyLoading-withLayout/README.md)
	- `loadChildren` ile rota grubu lazy loading + Layout (Navbar/Sidebar) + nested child routes.

### 14. Signals
- Signal Learning App: [14.Signals/signal-learning-app/README.md](14.Signals/signal-learning-app/README.md)
- Signal Effect + Resource + HttpResource: [14.Signals/signal-effect-resource-httpResource/README.md](14.Signals/signal-effect-resource-httpResource/README.md)
- Signal Forms: [14.Signals/SignalForms/README.md](14.Signals/SignalForms/README.md)
- Computed Signals: [14.Signals/computed-signals/README.md](14.Signals/computed-signals/README.md)
- Linked Signal: [14.Signals/linkedSignal/README.md](14.Signals/linkedSignal/README.md)

### 15. json-server
- json-server App: [15.json-server/json-server-app/README.md](15.json-server/json-server-app/README.md)
	- `json-server` ile sahte REST API, `HttpClient` + signal ile GET/POST.

### 16. Internationalization / Localization / i18n
- i18n App: [16.Internationalization - Localization - i18n/i18n/README.md](16.Internationalization - Localization - i18n/i18n/README.md)
	- Transloco ile coklu dil destegi, dil degistirme ve `localStorage` ile dil kaliciligi.

### 17. FlexUI
- FlexiApp: [17.FlexUI/FlexiApp/README.md](17.FlexUI/FlexiApp/README.md)
	- `flexi-grid` kutuphanesi demo: `httpResource` ile veri cekme, siralama, filtreleme, sayfalama, kolon yonetimi.

### Basic Exercises
- Kredi Hesaplama: [MyExersizes/kredi-hesaplama/README.md](MyExersizes/kredi-hesaplama/README.md)
- Kredi Hesaplama (Alternatif): [MyExersizes/myKrediHesaplama/README.md](MyExersizes/myKrediHesaplama/README.md)
- Todo App: [MyExersizes/todoApp/README.md](MyExersizes/todoApp/README.md)
- Todo App (Alternatif): [MyExersizes/myTodoApp/myTodoApp/README.md](MyExersizes/myTodoApp/myTodoApp/README.md)
- Base App (Referans): [MyExersizes/my-app/README.md](MyExersizes/my-app/README.md)

## Branch Kullanimi

- Her konu icin yeni branch: `git switch -c konu-adi`
- Bitince push: `git push -u origin konu-adi`
- Main'e donus: `git switch main`

## Sonraki Konular (Planlanan)

- Component lifecycle
- Advanced routing
- State management (ileri seviye)
- Testing (unit, e2e)

## Calistirma

Her alt proje ayri bir Angular uygulamasidir:

```bash
cd <konu-klasoru>/<proje-adi>
npm install
npm start
```

Ornek:

```bash
cd 17.FlexUI/FlexiApp
npm install
npm start
```

> `15.json-server` projesi icin ayrica `json-server`'in ayri bir terminalde calistirilmasi gerekir:
> ```bash
> json-server --watch db.json --port 3000
> ```
