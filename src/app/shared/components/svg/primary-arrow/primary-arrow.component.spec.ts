import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryArrowComponent } from './primary-arrow.component';

describe('PrimaryArrowComponent', () => {
  let component: PrimaryArrowComponent;
  let fixture: ComponentFixture<PrimaryArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimaryArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
