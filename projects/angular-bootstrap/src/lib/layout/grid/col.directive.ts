import { Directive, Input, OnChanges, SimpleChanges, HostBinding } from '@angular/core';

@Directive({
  selector: 'bs-col',
})
export class ColDirective implements OnChanges {

  private _elementClass: string[] = [];

  @HostBinding('class')
  set elementClass (val: string) {
    this._elementClass = val.split(' ');
  }
  get elementClass (): string {
    return this._elementClass.join(' ');
  }

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

  constructor () {}

  ngOnChanges (changes: SimpleChanges) {
    this._elementClass = [];

    if (changes['size']) {
      this._elementClass.push(`col-${changes['size'].currentValue}`);
    }
    if (changes['sizeSm']) {
      this._elementClass.push(`col-sm-${changes['sizeSm'].currentValue}`);
    }
    if (changes['sizeMd']) {
      this._elementClass.push(`col-md-${changes['sizeMd'].currentValue}`);
    }
    if (changes['sizeLg']) {
      this._elementClass.push(`col-lg-${changes['sizeLg'].currentValue}`);
    }
    if (changes['sizeXl']) {
      this._elementClass.push(`col-xl-${changes['sizeXl'].currentValue}`);
    }
    if (changes['sizeXxl']) {
      this._elementClass.push(`col-xxl-${changes['sizeXxl'].currentValue}`);
    }
  }

}
