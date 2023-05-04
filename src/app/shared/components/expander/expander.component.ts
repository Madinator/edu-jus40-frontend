import { ChangeDetectionStrategy, Component, QueryList, ContentChildren, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-expander',
  templateUrl: './expander.component.html',
  styleUrls: ['./expander.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpanderComponent {
  @ContentChildren('button, content') contentList!: QueryList<ElementRef>;
  @Input() isExpanded:boolean = false;

  ngOnChanges() {
    const contentElement = document.getElementById("expander-content");
    if(!contentElement) {
      return;
    }
    const firstChild = contentElement.firstElementChild;
    if(!firstChild) {
      return;
    }
    if(this.isExpanded) {
      contentElement.style.height = firstChild.clientHeight +  parseInt(getComputedStyle(firstChild).marginTop,10) + "px";
      return;
    }
    contentElement.style.height = "0";
  } 
}
