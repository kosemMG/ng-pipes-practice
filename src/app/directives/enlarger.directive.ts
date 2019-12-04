import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appEnlarger]'
})
export class EnlargerDirective {
  initialFontSize: any;
  @HostBinding('style.fontSize') fontSize: string;

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onclick() {
    this.initialFontSize = parseInt(window.getComputedStyle(this.elementRef.nativeElement).fontSize, 10);
    this.fontSize = `${this.initialFontSize * 1.2}px`;
  }
}
