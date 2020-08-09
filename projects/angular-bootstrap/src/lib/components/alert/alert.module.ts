import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert.component';
import { AlertLinkDirective, AlertHeadingDirective } from './alert.directive';

@NgModule({
  declarations: [
    AlertComponent,
    AlertLinkDirective,
    AlertHeadingDirective
  ],
  exports: [
    AlertComponent,
    AlertLinkDirective,
    AlertHeadingDirective
  ],
  imports: [
    CommonModule
  ]
})
export class AlertModule { }
