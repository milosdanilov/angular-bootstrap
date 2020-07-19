import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerDirective } from './container';
import { RowDirective, ColDirective } from './grid';

@NgModule({
  declarations: [
    ContainerDirective,
    RowDirective,
    ColDirective
  ],
  exports: [
    ContainerDirective,
    RowDirective,
    ColDirective
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
