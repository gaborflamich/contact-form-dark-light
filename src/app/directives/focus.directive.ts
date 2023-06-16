import { Directive, ElementRef, Input, ViewChild } from '@angular/core';

@Directive({
  selector: '[appFocus]',
})
export class FocusDirective {
  @ViewChild('zone') focus?: ElementRef;

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    this.el.nativeElement.focus();
  }
}
