import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

import { ButtonColor } from './button';

@Directive({
  selector: 'button[bsButton]',
  host: {
    'type': 'button',
    'class': 'btn'
  }
})
export class ButtonDirective {

  private _color: ButtonColor;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @Input()
  set color(newColor: ButtonColor) {
    if (this._color) {
      this.renderer.removeClass(this.elementRef.nativeElement, `btn-${this._color}`);
    }

    if (newColor) {
      this.renderer.addClass(this.elementRef.nativeElement, `btn-${newColor}`);
    }

    this._color = newColor;
  }

}
