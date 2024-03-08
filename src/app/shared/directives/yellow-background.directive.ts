import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appYellowBackground]',
})
export class YellowBackgroundDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
