import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodistComponent } from './methodist.component';

describe('MethodistComponent', () => {
  let component: MethodistComponent;
  let fixture: ComponentFixture<MethodistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MethodistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MethodistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
