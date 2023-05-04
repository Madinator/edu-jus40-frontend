import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class FormFieldComponent {
  @Input() name: string = "";
  @Input() error: string = "";
  @Input() focused: boolean = false;
  @Input() isActive: boolean = true;
}
