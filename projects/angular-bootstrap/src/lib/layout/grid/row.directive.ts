import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[bsRow]'
})
export class RowDirective {
  @HostBinding('class') row = 'row';
}
