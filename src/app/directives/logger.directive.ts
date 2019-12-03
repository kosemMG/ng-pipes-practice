import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appLogger]'
})
export class LoggerDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('click') onclick() {
    console.log(this.elementRef.nativeElement.innerText);
  }
}
