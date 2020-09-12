import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BadgeComponent } from './badge.component';

@Component({
  selector: 'bs-pill',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'rounded-pill'
  }
})
export class PillComponent extends BadgeComponent { }
