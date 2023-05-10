import { Directive, inject } from '@angular/core';
import { ControlValueAccessor, FormControlDirective, FormControlName, NG_VALUE_ACCESSOR, NgModel, NgControl } from '@angular/forms';

@Directive({
  selector: '[appNoopValueAccessorDirective]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: NoopValueAccessorDirectiveDirective,
    },
  ],
})
export class NoopValueAccessorDirectiveDirective implements ControlValueAccessor {
  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
}

export function injectNgControl() {
  const ngControl = inject(NgControl, { self: true, optional: true });

  if (!ngControl) throw new Error('...');

  if (
    ngControl instanceof FormControlDirective ||
    ngControl instanceof FormControlName ||
    ngControl instanceof NgModel
  ) {
    return ngControl;
  }

  throw new Error('...');
}
