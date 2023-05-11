import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NoopValueAccessorDirectiveDirective, injectNgControl } from 'src/app/shared/directives/noop-value-accessor-directive/noop-value-accessor-directive.directive';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  hostDirectives: [NoopValueAccessorDirectiveDirective], 
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  ngControl = injectNgControl();
  
  @Input() name: string = "";
  @Input() isActive: boolean = true;
  @Input() prefix: string = "";
  @Input() mask: string | null | undefined;
  @Input() error: string = "";

  public focused: boolean = false;

  @ViewChild('inputField', { static: true }) inputField!: ElementRef<HTMLInputElement>;
  
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
