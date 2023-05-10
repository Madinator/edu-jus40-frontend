import { ChangeDetectionStrategy, Component } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class RegistrationComponent {
  public firstFormGroup: FormGroup = this._formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirm_password: ['', Validators.required]
  }, { validator: this.passwordMatchValidator() });
  public firstFormGroupErrorMessage: string = "";

  public secondFormGroup: FormGroup = this._formBuilder.group({
    second_name: ['', Validators.required],
    first_name: ['', Validators.required],
    parent_name: ['', Validators.required],
    parent_contact: ['', Validators.required],
    parent_email: ['', Validators.required],
  });

  public thirdFormGroup: FormGroup = this._formBuilder.group({
    education_class: ['', Validators.required],
    first_item: ['', Validators.required],
    second_item: ['', Validators.required],
    instagram: ['', Validators.required],
    phone_number: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {}

  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password');
      const confirmPassword = control.get('confirm_password');
      if (password && confirmPassword && password.value !== confirmPassword.value) {
        this.firstFormGroupErrorMessage = "Passwords doesnt match"
        console.log(this.firstFormGroupErrorMessage);
        return { 'passwordMismatch': true };
      } 
      this.firstFormGroupErrorMessage = "";
      return null;
    };
  };
}
