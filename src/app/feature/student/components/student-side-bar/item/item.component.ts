import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { CourseStatus, FileExtension } from 'src/app/shared/models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent {
  public courseStatus = CourseStatus;
  @Input() type:CourseStatus = this.courseStatus.ADDITIONAL;

  public fileExtension = FileExtension;
  @Input() filesType:FileExtension[] = [this.fileExtension.WORD, this.fileExtension.PDF, this.fileExtension.EXCEL];

  public isOpen: boolean = false;

  public color: ThemePalette = 'accent';
  public mode: ProgressSpinnerMode = 'determinate';
  public value: number = 50;
  public diameter: number = 20;
  
  
  toggle() {
    this.isOpen = !this.isOpen;
  }

}
