import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[bsRow], [bs-row]'
})
export class RowDirective {
  @HostBinding('class') row = 'row';
}
