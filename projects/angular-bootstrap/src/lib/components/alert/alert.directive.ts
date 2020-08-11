import { Directive, Output, EventEmitter } from '@angular/core';

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
  selector: 'bs-alert-dismissible, [bs-alert-dismissible], [bsAlertDismissible]',
  host: {
    'class': 'alert-dismissible',
    '[class.show]': '_state === "show"',
    '[class.fade]': '_state === "fade"',
    '(transitionend)': 'onTransitionEnd()'
  },
})
export class AlertDismissibleDirective {

  @Output()
  close = new EventEmitter<void>();

  @Output()
  dispose = new EventEmitter<void>();

  _state: 'show' | 'fade' = 'show';

  triggerDismiss() {
    this._state = 'fade';
    this.close.emit();
  }

  onTransitionEnd() {
    this.dispose.emit();
  }
}
