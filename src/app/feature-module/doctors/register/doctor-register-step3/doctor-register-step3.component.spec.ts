import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegisterStep3Component } from './doctor-register-step3.component';

describe('DoctorRegisterStep3Component', () => {
  let component: DoctorRegisterStep3Component;
  let fixture: ComponentFixture<DoctorRegisterStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRegisterStep3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorRegisterStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
