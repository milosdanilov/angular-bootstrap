import { AlertLinkDirective, AlertHeadingDirective, AlertDismissibleDirective } from './alert.directive';

describe('AlertLinkDirective', () => {
  it('should create an instance', () => {
    const directive = new AlertLinkDirective();
    expect(directive).toBeTruthy();
  });
});

describe('AlertHeadingDirective', () => {
  it('should create an instance', () => {
    const directive = new AlertHeadingDirective();
    expect(directive).toBeTruthy();
  });
});

describe('AlertDismissibleDirective', () => {
  it('should create an instance', () => {
    const directive = new AlertDismissibleDirective();
    expect(directive).toBeTruthy();
  });
});
