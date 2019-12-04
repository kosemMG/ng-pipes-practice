import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCloud]'
})
export class CloudDirective {
  @HostBinding('style.boxShadow') boxShadow: string;
  @HostBinding('style.opacity') opacity: number;
  @HostBinding('style.transition') transition: string;

  constructor() { }

  @HostListener('mouseenter') mouseenter() {
    this.boxShadow = '5px 10px 5px olive';
    this.opacity = 0.5;
    this.transition = 'all 0.5s';
  }

  @HostListener('mouseleave') mouseleave() {
    this.boxShadow = 'none';
    this.opacity = 1;
    this.transition = 'all 0.5s';
  }

}
