# Directives

Bu proje, custom directive yazimi ve kullanimina odaklanir. Ornekler: `renklendir` ve `validate` directive'leri.

## Hedefler

- Attribute directive yazimi
- Host binding ve DOM etkilesimi
- Basit dogrulama ve stil uygulama

## One Cikan Dosyalar

- `src/app/renklendir.ts`
- `src/app/validate.ts`

## Ornek

```ts
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: '[renklendir]'
})
export class Renklendir {
	@Input('renklendir') color: string | undefined;
	@Input('test') name: string | undefined;

	constructor(private el: ElementRef) {}

	@HostListener('mouseenter') method1() {
		// event ornekleri
	}
}
```

```ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[validate]'
})
export class Validate {
	constructor(private el: ElementRef) {}

	@HostListener('keyup') keyup() {
		this.checkInputValidation(this.el.nativeElement);
	}
}
```

## Calistirma

```bash
npm install
npm start
```
