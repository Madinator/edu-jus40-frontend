import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class InputPasswordComponent {
  @Input() name: string = "";
  public error: string = "";
  public focused: boolean = false;

  public passwordControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  public isPasswordShown: boolean = false;
  @ViewChild('inputField', { static: true }) inputField!: ElementRef<HTMLInputElement>;


  constructor() {
    this.passwordControl.valueChanges.subscribe(value => {
      if (value && value.length < 8) {
        this.handlePasswordTooShort();
        return;
      }
      this.handlePasswordGood();
    });
  };

  handlePasswordTooShort(): void {
    this.error = "Password is too short!";
  };

  handlePasswordGood(): void {
    this.error = "";
  };

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
