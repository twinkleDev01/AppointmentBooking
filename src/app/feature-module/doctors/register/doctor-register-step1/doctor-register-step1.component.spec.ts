import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegisterStep1Component } from './doctor-register-step1.component';

describe('DoctorRegisterStep1Component', () => {
  let component: DoctorRegisterStep1Component;
  let fixture: ComponentFixture<DoctorRegisterStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRegisterStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorRegisterStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
