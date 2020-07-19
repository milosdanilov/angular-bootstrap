import { Directive, Input } from '@angular/core';

@Directive({
  selector: 'bs-col'
})
export class ColDirective {

  @Input()
  size: number;

  @Input()
  sizeSm: number;

  @Input()
  sizeMd: number;

  @Input()
  sizeLg: number;

  @Input()
  sizeXl: number;

  @Input()
  sizeXxl: number;

}
