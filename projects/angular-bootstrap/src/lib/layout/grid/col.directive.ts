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

    if (this.changeIsSize(changes)) {
      const sizes = [
        this.size && `col-${this.size}`,
        this.sizeSm && `col-sm-${this.sizeSm}`,
        this.sizeMd && `col-md-${this.sizeMd}`,
        this.sizeLg && `col-lg-${this.sizeLg}`,
        this.sizeXl && `col-xl-${this.sizeXl}`,
        this.sizeXxl && `col-xxl-${this.sizeXxl}`
      ];

      this._elementClass = [...sizes];
    }
  }

  private changeIsSize(changes: SimpleChanges): boolean {
    return ['size', 'sizeSm', 'sizeMd', 'sizeLg', 'sizeXl', 'sizeXxl'].some(x => changes.hasOwnProperty(x));
  }

}
