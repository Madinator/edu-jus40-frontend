import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiblesCardComponent } from './responsibles-card.component';

describe('ResponsiblesCardComponent', () => {
  let component: ResponsiblesCardComponent;
  let fixture: ComponentFixture<ResponsiblesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiblesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiblesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
