# Angular 21 + Transloco i18n Rehberi

Bu proje, Angular 21 üzerinde **Transloco** kullanarak çoklu dil (i18n) desteği için hazırlanmıştır.

Bu döküman şunları kapsar:

- Gerekli paketlerin kurulumu
- Transloco altyapısının projeye eklenmesi
- Çeviri dosyalarının organizasyonu
- Bileşen içinde çeviri kullanımı
- Dil değiştirme ve localStorage ile dil kalıcılığı
- Sık karşılaşılan hatalar ve çözümleri

---

## 1) Ön Koşullar

- Node.js LTS (öneri: 20+)
- npm (bu projede `packageManager`: `npm@11.6.2`)
- Angular CLI (opsiyonel global kurulum)

Versiyon kontrolü:

```bash
node -v
npm -v
```

---

## 2) Projeyi Çalıştırmadan Önce Paket Kurulumu

Bu repoda paketler yüklü değilse (`UNMET DEPENDENCY` görüyorsan), önce proje klasörüne girip kurulum yap:

```bash
cd i18n
npm install
```

Kurulum doğrulama:

```bash
npm ls --depth=0
```

> `UNMET DEPENDENCY` görmemen gerekir.

---

## 3) Transloco Paketleri

Bu projede temel olarak şu paket kullanılır:

- `@jsverse/transloco`

Eksikse kur:

```bash
npm install @jsverse/transloco
```

Not: `@angular/common/http` ayrıca paket olarak kurulmaz; Angular paketinin parçasıdır.

---

## 4) Mevcut Proje Yapısı (i18n ile ilgili)

```text
src/
	app/
		app.config.ts
		transloco-loader.ts
		app.ts
public/
	i18n/
		en.json
		tr.json
```

- `transloco-loader.ts`: Dil dosyalarını HTTP ile yükler.
- `app.config.ts`: `provideTransloco(...)` ile genel i18n konfigürasyonu yapılır.
- `public/i18n/*.json`: Çeviri kaynak dosyaları.

---

## 5) Transloco Loader Kurulumu

`src/app/transloco-loader.ts`

```ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Translation, TranslocoLoader } from '@jsverse/transloco';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
	private http = inject(HttpClient);

	getTranslation(lang: string) {
		return this.http.get<Translation>(`/i18n/${lang}.json`);
	}
}
```

Bu sınıf aktif dile göre `public/i18n/en.json`, `public/i18n/tr.json` gibi dosyaları getirir.

---

## 6) Global Provider Konfigürasyonu

`src/app/app.config.ts`

```ts
import { ApplicationConfig, isDevMode, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideTransloco } from '@jsverse/transloco';

import { routes } from './app.routes';
import { TranslocoHttpLoader } from './transloco-loader';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideRouter(routes),
		provideHttpClient(),
		provideTransloco({
			config: {
				availableLangs: ['en', 'tr'],
				defaultLang: 'en',
				reRenderOnLangChange: true,
				prodMode: !isDevMode(),
			},
			loader: TranslocoHttpLoader,
		}),
	],
};
```

Kritik noktalar:

- `availableLangs`: Uygulamanın desteklediği diller.
- `defaultLang`: İlk açılış dili.
- `reRenderOnLangChange`: Dil değişince template’in yeniden render edilmesini sağlar.

---

## 7) Çeviri Dosyaları

`public/i18n/en.json`

```json
{
	"TITLE": "Hello World!",
	"LANGUAGE": {
		"EN": "English",
		"TR": "Turkish"
	}
}
```

`public/i18n/tr.json`

```json
{
	"TITLE": "Merhaba Dünya!",
	"LANGUAGE": {
		"EN": "İngilizce",
		"TR": "Türkçe"
	}
}
```

Yeni anahtar eklerken tüm dillerde aynı yapıyı koru.

---

## 8) Bileşende Kullanım

`src/app/app.ts` içinde:

```ts
import { Component, inject } from '@angular/core';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
	selector: 'app-root',
	imports: [TranslocoModule],
	template: `
		<ng-container *transloco="let t">
			<h1>{{ t('TITLE') }}</h1>
			<button (click)="changeLang('tr')">{{ t('LANGUAGE.TR') }}</button>
			<button (click)="changeLang('en')">{{ t('LANGUAGE.EN') }}</button>
		</ng-container>
	`,
})
export class App {
	readonly #transloco = inject(TranslocoService);

	constructor() {
		const lang = localStorage.getItem('lang') || 'en';
		this.#transloco.setActiveLang(lang);
	}

	changeLang(lang: string) {
		this.#transloco.setActiveLang(lang);
		localStorage.setItem('lang', lang);
	}
}
```

---

## 9) Signal Notu (Önemli)

`selectTranslate(...)` bir **Observable** döndürür. Bu yüzden doğrudan `signal(selectTranslate(...))` kullanmak doğru değildir.

Observable’ı signal’a çevirmek istersen:

```ts
import { toSignal } from '@angular/core/rxjs-interop';

readonly title = toSignal(this.#transloco.selectTranslate('TITLE'), {
	initialValue: '',
});
```

Template:

```html
<h1>{{ title() }}</h1>
```

---

## 10) Uygulamayı Çalıştırma

```bash
npm start
```

veya

```bash
ng serve
```

Tarayıcı: `http://localhost:4200/`

---

## 11) Yeni Dil Ekleme (örnek: `de`)

1. `public/i18n/de.json` oluştur.
2. `app.config.ts` içinde `availableLangs` listesine `de` ekle.
3. UI’a dil değiştirme butonu/menüsü ekle: `setActiveLang('de')`.

---

## 12) Sık Hatalar ve Çözümler

### A) `UNMET DEPENDENCY`

Sebep: Paketler kurulu değil veya `node_modules` bozuk.

Çözüm:

```bash
cd i18n
npm install
npm ls --depth=0
```

Gerekirse temiz kurulum:

```bash
rm -rf node_modules package-lock.json
npm install
```

> Windows PowerShell için alternatif:
>
> ```powershell
> Remove-Item -Recurse -Force node_modules
> Remove-Item -Force package-lock.json
> npm install
> ```

### B) Çeviri anahtarı ekranda düz metin görünüyor (`TITLE` gibi)

Sebep:

- İlgili JSON dosyasında anahtar yok
- Yanlış namespace/anahtar yolu
- Dosya path’i yanlış

Kontrol:

- `public/i18n/<lang>.json` içinde anahtar var mı?
- `t('LANGUAGE.TR')` gibi yol doğru mu?

### C) Dil değişiyor ama ekran güncellenmiyor

`provideTransloco` config içinde `reRenderOnLangChange: true` olduğundan emin ol.

---

## 13) Faydalı Komutlar

```bash
npm install
npm ls --depth=0
npm start
npm run build
npm test
```

---

## 14) Özet

- Bu projede i18n altyapısı Transloco ile kuruludur.
- Çeviri dosyaları `public/i18n` altında tutulur.
- Aktif dil `setActiveLang(...)` ile değiştirilir.
- Dil tercihi localStorage ile kalıcı hale getirilmiştir.
