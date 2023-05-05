import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogCoursesButtonTheme } from 'src/app/shared/models/enums/themes.enum';

@Component({
  selector: 'app-courses-card',
  templateUrl: './courses-card.component.html',
  styleUrls: ['./courses-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesCardComponent {
  public isOpen: boolean = false;

  public catalogCoursesButtonTheme = CatalogCoursesButtonTheme;

  toggle(): void {
    this.isOpen = !this.isOpen;
  };
}
