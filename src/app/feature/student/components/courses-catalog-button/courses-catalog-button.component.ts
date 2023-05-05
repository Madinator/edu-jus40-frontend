import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CatalogCoursesButtonTheme } from 'src/app/shared/models/enums/themes.enum';

@Component({
  selector: 'app-courses-catalog-button',
  templateUrl: './courses-catalog-button.component.html',
  styleUrls: ['./courses-catalog-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesCatalogButtonComponent {
  public catalogCoursesButtonTheme = CatalogCoursesButtonTheme;
  @Input() theme: CatalogCoursesButtonTheme = CatalogCoursesButtonTheme.DARK;
}
