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
    email: "",
    password: "",
    confirm_password: ""
  }

  public secondFormGroup!: FormGroup;
  public secondFormGroupErrors = {
    second_name: "",
    first_name: "",
    parent_name: "",
    parent_contact: "",
    parent_email: "",
  }

  public thirdFormGroup!: FormGroup;
  public thirdFormGroupErrors = {
    education_class: "",
    first_item: "",
    second_item: "",
    instagram: "",
    phone_number: "",
  }

  public firstSubjects: Subjects[] = Object.values(Subjects); 
  public secondSubjects: Subjects[] = [];

  constructor( 
    private _formBuilder: FormBuilder, 
    private subjectSelectionServiceService: SubjectSelectionServiceService,
    private cdr: ChangeDetectorRef) {

    this.firstFormGroup = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm_password: ['', [Validators.required, Validators.minLength(8)]]
    }, { validator: passwordMatchValidator() });

    this.secondFormGroup = this._formBuilder.group({
      second_name: ['', Validators.required],
      first_name: ['', Validators.required],
      parent_name: ['', Validators.required],
      parent_contact: ['', Validators.required],
      parent_email: ['', Validators.required],
    });

    this.thirdFormGroup = this._formBuilder.group({
      education_class: ['', Validators.required],
      first_item: ['', Validators.required],
      second_item: ['', Validators.required],
      instagram: ['', Validators.required],
      phone_number: ['', Validators.required],
    });
  }  

  handleFormControlErrors(form: FormGroup, error: any, controlName: string): void {
    getFormControlErrors(form, error, controlName);
    this.cdr.detectChanges();
  }

  onFirstSubjectChoosed(value: string): void {
    this.secondSubjects = this.subjectSelectionServiceService.getAvailableSubjects(value as Subjects) as Subjects[];
  }
}
