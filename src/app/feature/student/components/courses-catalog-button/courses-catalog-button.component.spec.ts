import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesCatalogButtonComponent } from './courses-catalog-button.component';

describe('CoursesCatalogButtonComponent', () => {
  let component: CoursesCatalogButtonComponent;
  let fixture: ComponentFixture<CoursesCatalogButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesCatalogButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesCatalogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
