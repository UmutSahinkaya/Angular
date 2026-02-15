# MyBasicRouting

Bu proje, Angular'da temel routing mantigini ogrenmek icin hazirlanmistir. Sayfalar arasi gecis, layout kullanimi ve basit route tanimlari uzerine odaklanir.

## Hedefler

- `app.routes.ts` uzerinden route tanimi
- Login ve layout tabanli child route yapisi
- Basit sayfa gecisleri (home, about, contact)

## One Cikan Dosyalar

- `src/app/app.routes.ts`
- `src/app/layouts/`
- `src/app/home/`, `src/app/about/`, `src/app/contact/`

## Ornek

```ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { Layouts } from './layouts/layouts';
import { Login } from './login/login';

export const routes: Routes = [
	{ path: 'login', component: Login },
	{
		path: '',
		component: Layouts,
		children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'about', component: AboutComponent },
			{ path: 'contact', component: ContactComponent },
			{ path: 'contact/:params', component: ContactComponent }
		]
	}
];
```

## Calistirma

```bash
npm install
npm start
```
