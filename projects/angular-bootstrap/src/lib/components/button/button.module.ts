import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnchorButtonDirective, ButtonDirective } from './button.directive';

@NgModule({
  declarations: [ButtonDirective, AnchorButtonDirective],
  exports: [ButtonDirective, AnchorButtonDirective],
  imports: [
    CommonModule
  ]
})
export class ButtonModule { }
