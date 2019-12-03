import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appInvisible]'
})
export class InvisibleDirective {
  initialDisplay: string;
  @HostBinding('style.display') newDisplay: string;


  constructor(private elementRef: ElementRef) { }

  @HostListener('mouseenter') mouseenter() {
    this.initialDisplay = window.getComputedStyle(this.elementRef.nativeElement).display;
    console.log(this.initialDisplay);
    this.newDisplay = 'none';
  }

  @HostListener('mouseleave') mouseleave() {
    this.newDisplay = this.initialDisplay;
  }
}
