# MyBasicRouting

Bu proje, Angular'da temel routing mantigini ogrenmek icin hazirlanmistir. Sayfalar arasi gecis, layout kullanimi, child route yapisi ve route parametreleri uzerine odaklanir.

---

## Kapsanan Konular

- `app.routes.ts` uzerinden route tanimi
- `RouterOutlet` ile sayfa icerigi render etme
- Layout tabanli child route yapisi (Navbar/Sidebar her sayfada sabit)
- Tek parametreli route (`:params`)
- `routerLink` ile navigasyon (template)
- `router.navigate()` ile navigasyon (TypeScript)
- `login` sayfasinin layout disinda kalmasi

---

## Proje Yapisi

```
src/app/
  layouts/           // Navbar + RouterOutlet iceren kabuk bilesen
  home/              // Ana sayfa bilesen
  about/             // Hakkinda bilesen
  contact/           // Iletisim bilesen (params destekli)
  login/             // Login sayfasi (layout disinda)
  app.routes.ts      // Tum rota tanimlari
  app.ts             // Kok router-outlet
```

---

## Rota Yapisi

```ts
export const routes: Routes = [
  { path: 'login', component: Login },          // Layout disinda tek basina sayfa
  {
    path: '',
    component: Layouts,                          // Kabuk: Navbar + <router-outlet>
    children: [
      { path: 'home',             component: HomeComponent },
      { path: 'about',            component: AboutComponent },
      { path: 'contact',          component: ContactComponent },
      { path: 'contact/:params',  component: ContactComponent },  // Route param
    ]
  }
];
```

**Nasil Calisir:**
1. Kullanici `/home`'a gidince Angular once `Layouts` bilesenini render eder.
2. `Layouts` icindeki `<router-outlet>` icerige `HomeComponent`'i koyar.
3. `/login`'a gidince `Login` dogrudan render olur; Navbar/Sidebar gozukmez.

---

## Route Parametresi Okuma

`contact/:params` rotasinda `params` degerini okumak icin:

### Angular 16+ `@Input()` ile (Onerilen)

`withComponentInputBinding()` app.config'e eklenmeli:

```ts
provideRouter(routes, withComponentInputBinding())
```

```ts
@Component({ ... })
export class ContactComponent {
  @Input() params: string = '';
}
```

### `ActivatedRoute` ile (Klasik)

```ts
export class ContactComponent {
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.route.params.subscribe(p => {
      const val = p['params'];
    });
  }
}
```

---

## Template'de Navigasyon

```html
<!-- Basit link -->
<a routerLink="/home">Ana Sayfa</a>

<!-- Parametreli link -->
<a [routerLink]="['/contact', 'hello']">Iletisim</a>

<!-- Aktif link stili -->
<a routerLink="/about" routerLinkActive="active">Hakkinda</a>
```

---

## TypeScript'te Navigasyon

```ts
private router = inject(Router);

this.router.navigate(['/home']);
this.router.navigate(['/contact', 'param-degeri']);
this.router.navigateByUrl('/login');
```

---

## Calistirma

```bash
cd 5.routing/myBasicRouting
npm install
npm start
```

URL ornekleri:
- `http://localhost:4200/home`
- `http://localhost:4200/contact/merhaba`
- `http://localhost:4200/login`

---

## Ogrenim Notlari

- `children` ile tanimlanmis rotalar, parent component'in `<router-outlet>`'ine render olur.
- `RouterOutlet` sadece import edilmesi yeterlidir; kullanildigi component standalone ise `imports: [RouterOutlet]` eklenmeli.
- `routerLinkActive` direktifi, aktif rota ile eslesen linke otomatik CSS sinifi ekler.
- `path: ''` bos path, site koku icin kullanilir ve genellikle layout gibi wrapper component'lara verilir.
- `{ path: '**', redirectTo: '/home' }` eklenerek bilinmeyen URL'ler yonlendirilebilir.

---

## Bagli Dokumanlar

- Query Params: [../queryParamsApp/README.md](../queryParamsApp/README.md)
- Ana repo: [../../README.md](../../README.md)
