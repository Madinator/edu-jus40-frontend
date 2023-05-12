import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NoopValueAccessorDirectiveDirective, injectNgControl } from 'src/app/shared/directives/noop-value-accessor-directive/noop-value-accessor-directive.directive';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  hostDirectives: [NoopValueAccessorDirectiveDirective], 
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent {
  ngControl = injectNgControl();
  
  @Input() name: string = "";
  @Input() isActive: boolean = true;
  @Input() options: string[] = [];
  @Output() selectedValue: EventEmitter<string> = new EventEmitter<string>();

  public focused: boolean = false;

  onFocus(): void {
    this.focused = true;
  };
  onBlur(): void {
    this.focused = false;
  };
  onSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.selectedValue.emit(value);
  }
}
