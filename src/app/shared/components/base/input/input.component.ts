import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NoopValueAccessorDirectiveDirective } from 'src/app/shared/directives/noop-value-accessor-directive/noop-value-accessor-directive.directive';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  hostDirectives: [NoopValueAccessorDirectiveDirective], 
  changeDetection: ChangeDetectionStrategy.OnPush,
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
