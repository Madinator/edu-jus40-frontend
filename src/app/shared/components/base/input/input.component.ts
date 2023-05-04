import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class InputComponent {
  @Input() name: string = "";
  public focused: boolean = false;
  @Input() isActive: boolean = true;

  @ViewChild('inputField', { static: true }) inputField!: ElementRef<HTMLInputElement>;

  @Input() prefix: string = "";
  @Input() mask: string = "";
  
  onFocus(): void {
    this.focused = true;
  };
  onBlur(): void {
    this.focused = false;
  };

  clearInput(): void {
    this.inputField.nativeElement.value = "";
    this.inputField.nativeElement.focus();
  }
}
