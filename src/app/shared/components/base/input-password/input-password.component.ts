import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NoopValueAccessorDirectiveDirective, injectNgControl } from 'src/app/shared/directives/noop-value-accessor-directive/noop-value-accessor-directive.directive';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
  hostDirectives: [NoopValueAccessorDirectiveDirective], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPasswordComponent {
  ngControl = injectNgControl();
  @Input() name: string = "";
  @Input() error: string = "";
  public focused: boolean = false;

  public isPasswordShown: boolean = false;
  @ViewChild('inputField', { static: true }) inputField!: ElementRef<HTMLInputElement>;

  onFocus(): void {
    this.focused = true;
  };
  onBlur(): void {
    this.focused = false;
  };

  togglePassword(): void {
    this.isPasswordShown = !this.isPasswordShown;
    this.inputField.nativeElement.type =  this.isPasswordShown ? "text" : "password";

    this.inputField.nativeElement.focus();
  }
}
