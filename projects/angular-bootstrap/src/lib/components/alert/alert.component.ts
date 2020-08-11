import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  Renderer2,
  ElementRef,
  Optional,
  Host
} from '@angular/core';

import { AlertColors } from './alert';
import { AlertDismissibleDirective } from './alert.directive';

@Component({
  selector: 'bs-alert',
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    ':host { display: block }'
  ],
  host: {
    'class': 'alert',
    'role': 'alert',
  }
})
export class AlertComponent implements OnInit, OnChanges {

  @Input()
  color: AlertColors;

  _dismissible: boolean;

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    @Optional() @Host() private dismissibleDirective: AlertDismissibleDirective,
  ) {
    this._dismissible = Boolean(dismissibleDirective);
  }

  ngOnInit(): void {
    this.renderer.addClass(this.elementRef.nativeElement, `alert-${this.color}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    const colorChange = changes['color'];

    if (colorChange && !colorChange.isFirstChange()) {
      this.renderer.removeClass(this.elementRef.nativeElement, `alert-${colorChange.previousValue}`);
      this.renderer.addClass(this.elementRef.nativeElement, `alert-${colorChange.currentValue}`);
    }
  }

  onDismissBtnClick() {
    this.dismissibleDirective.triggerDismiss();
  }

}
