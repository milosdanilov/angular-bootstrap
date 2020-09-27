type Constructor<T> = new(...args: any[]) => T;

export interface CanToggle {
  toggled: boolean;
}

export type CanToggleCtor = Constructor<CanToggle>;

export function mixinToggled<T extends Constructor<{}>>(base: T): CanToggleCtor & T {

  return class extends base {

    private _toggled = false;

    set toggled(value: boolean) {
      this._toggled = value != null;
    }
    get toggled() {
      return this._toggled;
    }

    onToggle() {
      this._toggled = !this._toggled;
    }
  }
}
