import { Directive, Input, HostBinding } from '@angular/core';

import { ContainerClass, ContainerType, containerTypeToClassMap } from './container';

@Directive({
  selector: '[bsContainer]'
})
export class ContainerDirective {

  @HostBinding('class')
  containerClass: ContainerClass = 'container';

  @Input('bsContainer')
  set containerType(type: ContainerType) {
    this.containerClass = containerTypeToClassMap(type);
  }

}
