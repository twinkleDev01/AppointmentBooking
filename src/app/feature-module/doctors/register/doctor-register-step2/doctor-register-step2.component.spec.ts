import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRegisterStep2Component } from './doctor-register-step2.component';

describe('DoctorRegisterStep2Component', () => {
  let component: DoctorRegisterStep2Component;
  let fixture: ComponentFixture<DoctorRegisterStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorRegisterStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorRegisterStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
