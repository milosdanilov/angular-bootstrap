import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

import { AlertColors } from './alert';

@Component({
  selector: 'bs-alert',
  templateUrl: './alert.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit, OnChanges {

  @Input()
  color: AlertColors;

  colorClass: string;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color']) {
      this.colorClass = `alert-${this.color}`;
    }
  }

}
