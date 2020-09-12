import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeComponent } from './badge.component';
import { PillComponent } from './pill.component';

@NgModule({
  declarations: [BadgeComponent, PillComponent],
  exports: [BadgeComponent, PillComponent],
  imports: [
    CommonModule
  ]
})
export class BadgeModule { }
