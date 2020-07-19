import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'bs-row'
})
export class RowDirective {
  @HostBinding('class') row = 'row';
}
