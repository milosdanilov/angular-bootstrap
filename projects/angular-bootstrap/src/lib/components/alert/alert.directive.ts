import { Directive } from '@angular/core';

@Directive({
  selector: 'bs-alert-link, [bs-alert-link], [bsAlertLink]',
  host: {
    'class': 'alert-link'
  }
})
export class AlertLinkDirective { }


@Directive({
  selector: 'bs-alert-heading, [bs-alert-heading], [bsAlertHeading]',
  host: {
    'class': 'alert-heading'
  }
})
export class AlertHeadingDirective { }


@Directive({
  selector: 'bs-alert-dismissible, [bs-alert-dismissible], [bsAlertDismissible]'
})
export class AlertDismissibleDirective {}
