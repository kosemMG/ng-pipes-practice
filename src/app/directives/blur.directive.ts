import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBlur]'
})
export class BlurDirective {

  constructor() { }

  @HostListener('blur') onblur() {
    alert('Don\'t leave me!');
  }
}
