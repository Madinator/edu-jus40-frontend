import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { getFormControlErrors } from 'src/app/shared/validators';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class AuthorizationComponent {
  public registrationGroup!: FormGroup;
  public registrationGroupErrors = {
    email: "",
    password: "",
    checked: ""
  }

  public resetPassword!: FormGroup;
  public resetPasswordErrors = {
    email: ""
  }

  constructor(
    private _formBuilder: FormBuilder, 
    private cdr: ChangeDetectorRef) {
    this.registrationGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      checked: [false, Validators.required]
    });

    this.resetPassword = this._formBuilder.group({
      email: ['', Validators.required, Validators.email],
    });
  };

  handleFormControlErrors(form: FormGroup, error: any, controlName: string): void {
    getFormControlErrors(form, error, controlName);
    this.cdr.detectChanges();
  }
}
