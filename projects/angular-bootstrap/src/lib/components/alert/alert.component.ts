import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
  Renderer2,
  ElementRef
} from '@angular/core';

import { AlertColors } from './alert';

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

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

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

}
