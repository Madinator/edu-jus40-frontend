import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CourseStatus } from 'src/app/shared/models';

@Component({
  selector: 'app-student-side-bar',
  templateUrl: './student-side-bar.component.html',
  styleUrls: ['./student-side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentSideBarComponent {
  
}
