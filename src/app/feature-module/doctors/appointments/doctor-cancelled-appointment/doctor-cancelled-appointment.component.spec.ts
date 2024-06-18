import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCancelledAppointmentComponent } from './doctor-cancelled-appointment.component';

describe('DoctorCancelledAppointmentComponent', () => {
  let component: DoctorCancelledAppointmentComponent;
  let fixture: ComponentFixture<DoctorCancelledAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorCancelledAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorCancelledAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
