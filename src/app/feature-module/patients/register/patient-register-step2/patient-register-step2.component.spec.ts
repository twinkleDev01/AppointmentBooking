import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterStep2Component } from './patient-register-step2.component';

describe('PatientRegisterStep2Component', () => {
  let component: PatientRegisterStep2Component;
  let fixture: ComponentFixture<PatientRegisterStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRegisterStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRegisterStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
