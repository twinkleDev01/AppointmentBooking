import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegisterStep5Component } from './patient-register-step5.component';

describe('PatientRegisterStep5Component', () => {
  let component: PatientRegisterStep5Component;
  let fixture: ComponentFixture<PatientRegisterStep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientRegisterStep5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientRegisterStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
