import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCancelledAppointmentComponent } from './patient-cancelled-appointment.component';

describe('PatientCancelledAppointmentComponent', () => {
  let component: PatientCancelledAppointmentComponent;
  let fixture: ComponentFixture<PatientCancelledAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientCancelledAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientCancelledAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
