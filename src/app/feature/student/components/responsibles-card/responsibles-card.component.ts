import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-responsibles-card',
  templateUrl: './responsibles-card.component.html',
  styleUrls: ['./responsibles-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResponsiblesCardComponent {
  public isOpen: boolean = false;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
