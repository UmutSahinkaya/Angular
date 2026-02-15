# Guards

## Guard Nedir?

**Guard**, Angular routing sisteminde sayfa gecislerini kontrol eden ve yetkilendirme yapan ozel fonksiyonlardir. Kullanici belirli bir sayfaya erismeden once sartlari kontrol eder ve erisime izin verir veya engellersiniz.

## Ne Ise Yarar?

- **Yetkilendirme**: Kullanicinin bir sayfaya erisim yetkisi olup olmadigini kontrol eder
- **Authentication**: Giris yapmis kullanicilari korumali sayfalara yonlendirir
- **Veri Kontrolu**: Sayfa acilmadan once gerekli verilerin hazir olup olmadigini kontrol eder
- **Form Koruma**: Kullanici kaydedilmemis degisikliklerle sayfadan ayriliyor mu diye uyarir
- **Sayfa Erisimine Mudahale**: Route gecislerinde ozel mantik calistirir

## Nerelerde Kullanilir?

- Admin paneli gibi yetkili alanlarin korunmasi
- Login kontrolu ve yonlendirmesi
- Kullanici rolleri bazinda erisim kontrolu
- Form verisi kaydedilmeden sayfa degisimini engelleme
- Sayfa yuklemeden once veri yukleme
- Dinamik route parametresi dogrulamasi

## Guard Turleri

Angular'da farkli amaclar icin cesitli guard turleri vardir:

### 1. CanActivate
Bir route'a erisim izni kontrol eder. Kullanici bu sayfaya girebilir mi?

### 2. CanActivateChild
Child route'lara erisimi kontrol eder.

### 3. CanDeactivate
Kullanici sayfadan ayrilmadan once kontrol yapar. Ornegin: "Degisiklikler kaydedilmedi, cikis yapmak istediginize emin misiniz?"

### 4. CanMatch
Route eslesmesini kontrol eder (lazy loading icin kullanisli).

### 5. Resolve
Route aktif olmadan once gerekli verileri yukler.

## One Cikan Dosyalar

- `src/auth-guard.ts` (CanActivate ornegi)
- `src/check-guard.ts` (CanDeactivate ornegi)
- `src/auth.ts` (Service ile guard ornegi)
- `src/app/app.routes.ts` (Guard kullanimi)

## Ornek

### CanActivate Guard (Authentication)

```ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token: string | null = localStorage.getItem('token');
  const router = inject(Router);
  
  if (!token) {
    router.navigateByUrl('/login');
    return false;  // Erisim engellendi
  }
  
  return true;  // Erisim izni verildi
};
```

### CanDeactivate Guard (Form Koruma)

```ts
import { CanDeactivateFn } from '@angular/router';
import { Home } from './home/home';

export const checkGuard: CanDeactivateFn<Home> = (
  component, 
  currentRoute, 
  currentState, 
  nextState
) => {
  // Component'taki verilere erisilebilir
  component.name = 'Guard';
  
  // Kullaniciya onay sor
  const result = confirm('Cikmak istediginize emin misiniz?');
  return result;
};
```

### Service ile Guard (Daha Kompleks Mantik)

```ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private router: Router) {}
  
  isAuthenticated() {
    const token: string | null = localStorage.getItem('token');
    
    if (!token) {
      this.router.navigateByUrl('/login');
      return false;
    }
    
    return true;
  }
}
```

### Routes'ta Guard Kullanimi

```ts
import { Routes } from '@angular/router';
import { authGuard } from '../auth-guard';
import { checkGuard } from '../check-guard';
import { inject } from '@angular/core';
import { Auth } from '../auth';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    canActivateChild: [authGuard],  // Fonksiyon guard
    // canActivateChild: [() => inject(Auth).isAuthenticated()], // Service guard
    children: [
      {
        path: '',
        canDeactivate: [checkGuard],
        component: Home
      }
    ]
  },
  {
    path: 'login',
    component: Login
  }
];
```

## Guard Calisma Sirasi

1. `CanDeactivate` (mevcut route'tan ayrilirken)
2. `CanLoad`
3. `CanMatch`
4. `CanActivate` (yeni route'a girerken)
5. `CanActivateChild`
6. `Resolve`

## Best Practices

- **Guard'lari basit tutun**: Karmasik is mantigini service'lere tasiyin
- **Kullanici deneyimi**: Erisim engellendiyse kullaniciyi bilgilendirin
- **Performance**: Guard'lar senkron veya asenkron (Observable/Promise) olabilir
- **Test edilebilirlik**: Guard'lari test etmek kolay olmalidir

## Calistirma

```bash
npm install
npm start
```
