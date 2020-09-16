import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

import { BehaviorSubject, combineLatest, ReplaySubject } from 'rxjs';
import { map, pairwise, startWith, tap } from 'rxjs/operators';

import { ButtonColor, ButtonColorAndFillTuple, ButtonFillType, ButtonSize } from './button';

@Directive({
  selector: 'button[bsButton], input[bsButton]',
  exportAs: 'bsButton',
  host: {
    'class': 'btn'
  }
})
export class ButtonDirective implements OnInit {

  private color$ = new ReplaySubject<ButtonColor>(1);
  private fill$ = new BehaviorSubject<ButtonFillType>('solid');

  private _size: ButtonSize = 'default';

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @Input()
  set color(value: ButtonColor) {
    if (!value) {
      return;
    }

    this.color$.next(value);
  }

  @Input()
  set fill(value: ButtonFillType) {
    if (!value) {
      return;
    }

    this.fill$.next(value);
  }

  @Input()
  set size(value: ButtonSize) {
    this._setSize(value);
  }

  ngOnInit(): void {
    this.setupColorAndFill();
  }

  private setupColorAndFill() {

    const removeColorAndFill = (colorAndFill: ButtonColorAndFillTuple) => {
      const klass = this._createColorAndFillClass(colorAndFill);
      this.renderer.removeClass(this.elementRef.nativeElement, klass);
    }

    const addColorAndFills = (colorAndFill: ButtonColorAndFillTuple) => {
      const klass = this._createColorAndFillClass(colorAndFill);
      this.renderer.addClass(this.elementRef.nativeElement, klass);
    }

    const isEmpty = <T extends any[]>(tuple: T | []): tuple is [] => tuple.length === 0

    combineLatest([
      this.color$,
      this.fill$
    ])
    .pipe(
      startWith([] as []),
      pairwise(),
      tap(([previous, _]) => !isEmpty(previous) && removeColorAndFill(previous)),
      map(([_, current]) => !isEmpty(current) && current)
    )
    .subscribe(colorAndFill => addColorAndFills(colorAndFill))
  }

  private _createColorAndFillClass(colorAndFill: ButtonColorAndFillTuple) {

    const [color, fill] = colorAndFill;
    return ['btn', fill === 'outline' ? fill : '', color].filter(x => !!x).join('-');
  }

  private _setSize(size: ButtonSize) {

    if (this._size && this._size !== 'default') {
      this.renderer.removeClass(this.elementRef.nativeElement, `btn-${this._size}`);
    }

    if (size && size !== 'default') {
      this.renderer.addClass(this.elementRef.nativeElement, `btn-${size}`);
    }

    this._size = size;
  }
}

@Directive({
  selector: 'a[bsButton]',
  exportAs: 'bsButton',
  host: {
    'role': 'button'
  }
})
export class AnchorButtonDirective extends ButtonDirective { }
