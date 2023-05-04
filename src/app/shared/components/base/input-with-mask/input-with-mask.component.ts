import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-with-mask',
  templateUrl: './input-with-mask.component.html',
  styleUrls: ['./input-with-mask.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputWithMaskComponent {
  @Input() prefix: string = "";
  @Input() mask: string = "";
}
