import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerDirective } from './container';
import { RowDirective } from './grid';

@NgModule({
  declarations: [
    ContainerDirective,
    RowDirective
  ],
  exports: [
    ContainerDirective,
    RowDirective
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
