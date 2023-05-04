import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  @Input() name: string = "";
  public focused: boolean = false;
  @Input() isActive: boolean = true;

  onFocus(): void {
    this.focused = true;
  };
  onBlur(): void {
    this.focused = false;
  };
}
