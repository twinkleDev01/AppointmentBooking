import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterStep3Component } from './patient-register-step3.component';

describe('PatientRegisterStep3Component', () => {
  let component: PatientRegisterStep3Component;
  let fixture: ComponentFixture<PatientRegisterStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRegisterStep3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRegisterStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
