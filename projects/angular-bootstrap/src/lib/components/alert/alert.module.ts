import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert.component';

import {
  AlertLinkDirective,
  AlertHeadingDirective,
  AlertDismissibleDirective
} from './alert.directive';

@NgModule({
  declarations: [
    AlertComponent,
    AlertLinkDirective,
    AlertHeadingDirective,
    AlertDismissibleDirective
  ],
  exports: [
    AlertComponent,
    AlertLinkDirective,
    AlertHeadingDirective,
    AlertDismissibleDirective
  ],
  imports: [
    CommonModule
  ]
})
export class AlertModule { }
