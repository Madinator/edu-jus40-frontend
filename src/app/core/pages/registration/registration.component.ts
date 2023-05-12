import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { passwordMatchValidator, getFormControlErrors } from 'src/app/shared/validators';
import { Subjects } from 'src/app/shared/models';
import { SubjectSelectionServiceService } from 'src/app/shared/services/subjectSelectionService/subject-selection-service.service';

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
  public firstFormGroup!: FormGroup;
  public firstFormGroupErrors = {
    second_name: "",
    first_name: "",
    email: "",
    instagram: ""
  }

  public secondFormGroup!: FormGroup;
  public secondFormGroupErrors = {
    password: "",
    confirm_password: "",
  }

  public firstSubjects: Subjects[] = Object.values(Subjects); 
  public secondSubjects: Subjects[] = [];

  constructor( 
    private _formBuilder: FormBuilder, 
    private subjectSelectionServiceService: SubjectSelectionServiceService,
    private cdr: ChangeDetectorRef) {

    this.firstFormGroup = this._formBuilder.group({
      second_name: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      instagram: ['', [Validators.required]],
    });

    this.secondFormGroup = this._formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]]
    }, { validator: passwordMatchValidator() });
  }  

  handleFormControlErrors(form: FormGroup, error: any, controlName: string): void {
    getFormControlErrors(form, error, controlName);
    this.cdr.detectChanges();
  }

  onFirstSubjectChoosed(value: string): void {
    this.secondSubjects = this.subjectSelectionServiceService.getAvailableSubjects(value as Subjects) as Subjects[];
  }
}
