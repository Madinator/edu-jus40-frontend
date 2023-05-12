import { FormGroup, AbstractControl, ValidatorFn, ValidationErrors  } from "@angular/forms";

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const formGroup = control as FormGroup;
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirm_password');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    } else {
      return null;
    }
  };
}
  

export function getFormControlErrors(form: FormGroup, error: any, controlName: string): void {
    if (form && form.errors) {
        Object.keys(form.errors).forEach(key => {
        switch (key) {
            case 'passwordMismatch':
            error['password'] = 'Пароли не совпадают';
            error['confirm_password'] = 'Пароли не совпадают';
            break;
        }
        });
        return;
    } else {
        error['password'] = '';
        error['confirm_password'] = '';
    }

    const control = form.get(controlName);
    if (control && control.errors) {
        Object.keys(control.errors).forEach(key => {
        switch (key) {
            case 'required':
            error[controlName] = 'Это поле обязательно';
            break;
            case 'email':
            error[controlName] = 'Некорректный формат email';
            break;
            case 'minlength':
            error[controlName] = 'Пароль должен содержать не менее 8 символов';
            break;
            default:
            error[controlName] = 'Неизвестная ошибка';
            break;
        }
        });
    } else {
        error[controlName] = '';
    }
}