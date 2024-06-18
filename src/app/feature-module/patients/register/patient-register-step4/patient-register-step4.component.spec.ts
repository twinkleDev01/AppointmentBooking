import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterStep4Component } from './patient-register-step4.component';

describe('PatientRegisterStep4Component', () => {
  let component: PatientRegisterStep4Component;
  let fixture: ComponentFixture<PatientRegisterStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRegisterStep4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRegisterStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
