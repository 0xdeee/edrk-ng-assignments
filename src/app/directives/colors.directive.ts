import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColors]',
})
export class ColorsDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mouseover') onMouseOver(): void {
    this.el.nativeElement.style.backgroundColor = '#48cae4';
  }
  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.style.backgroundColor = '';
  }
}
