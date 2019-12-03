import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.backgroundColor = 'lightblue';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'transparent';
  }

}
