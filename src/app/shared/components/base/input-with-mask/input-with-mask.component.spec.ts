import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithMaskComponent } from './input-with-mask.component';

describe('InputWithMaskComponent', () => {
  let component: InputWithMaskComponent;
  let fixture: ComponentFixture<InputWithMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputWithMaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputWithMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
