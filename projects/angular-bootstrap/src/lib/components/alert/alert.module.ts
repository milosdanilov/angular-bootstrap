import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert.component';
import { AlertContentDirective } from './alert-content.directive';

@NgModule({
  declarations: [AlertComponent, AlertContentDirective],
  exports: [AlertComponent],
  imports: [
    CommonModule
  ]
})
export class AlertModule { }
