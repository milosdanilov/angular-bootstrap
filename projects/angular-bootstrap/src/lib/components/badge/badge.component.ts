import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { BadgeColor } from './badge';

@Component({
  selector: 'bs-badge',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'badge',
  }
})
export class BadgeComponent {

  private _color: BadgeColor;

  @Input()
  set color(value: BadgeColor) {
    this._setColor(value);
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  private _setColor(color: BadgeColor) {
    if (this._color) {
      this.renderer.removeClass(this.elementRef.nativeElement, `bg-${this._color}`);
    }

    if (color) {
      this.renderer.addClass(this.elementRef.nativeElement, `bg-${color}`);

      if (color === 'warning' || color === 'light') {
        this.renderer.addClass(this.elementRef.nativeElement, 'text-dark');
      }
    }

    this._color = color;
  }
}
