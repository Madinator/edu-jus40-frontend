import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-arrow',
  templateUrl: './primary-arrow.component.html',
  styleUrls: ['./primary-arrow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryArrowComponent {
  @Input() isOpen: boolean = false;
  @Input() openColor: string = "white";
  @Input() closeColor: string = "#6A7186";
  @Input() initialSlope: number = 0;
  @Input() slopeDegree: number = 180;

  public arrowColor: string = this.closeColor;

  ngOnChanges() {
    if(this.isOpen) {
      this.arrowColor = this.openColor;
      return;
    }
    this.arrowColor = this.closeColor;
  }
}
