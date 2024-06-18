import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCancelledAppointment2Component } from './doctor-cancelled-appointment2.component';

describe('DoctorCancelledAppointment2Component', () => {
  let component: DoctorCancelledAppointment2Component;
  let fixture: ComponentFixture<DoctorCancelledAppointment2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorCancelledAppointment2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorCancelledAppointment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
