import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnchorButtonDirective, ButtonDirective, ButtonToggleDirective, AnchorButtonToggleDirective } from './button.directive';

@NgModule({
  declarations: [ButtonDirective, AnchorButtonDirective, ButtonToggleDirective, AnchorButtonToggleDirective],
  exports: [ButtonDirective, AnchorButtonDirective, ButtonToggleDirective, AnchorButtonToggleDirective],
  imports: [
    CommonModule
  ]
})
export class ButtonModule { }
