import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[renklendir]',
})
export class Renklendir {
  @Input("renklendir") color: string | undefined;
  @Input("test") name: string | undefined;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') method1() {
    // console.log(this.color);
    //console.log(this.name);
    //this.el.nativeElement.style.color = 'red';
    //this.el.nativeElement.innerHTML="<span style='color:blue'>"+this.name+"</span>";
    // console.log('Mouse elementin üzerinde');
  }

  @HostListener('mouseleave') method2() {
    //this.el.nativeElement.style.color = 'black';
    // console.log('Mouse elementin üzerinden ayrıldı');
  }
}
