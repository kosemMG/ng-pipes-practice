import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appLoggerValue]'
})
export class LoggerValueDirective {

  constructor(private elementRef: ElementRef) { }

  @HostListener('input') oninput() {
    console.log(this.elementRef.nativeElement.value);
  }
}
