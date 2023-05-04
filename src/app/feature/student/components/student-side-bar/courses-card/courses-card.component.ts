import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesCardComponent {
  public isOpen: boolean = false;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }
}
