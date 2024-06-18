import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterStep1Component } from './patient-register-step1.component';

describe('PatientRegisterStep1Component', () => {
  let component: PatientRegisterStep1Component;
  let fixture: ComponentFixture<PatientRegisterStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRegisterStep1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRegisterStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
