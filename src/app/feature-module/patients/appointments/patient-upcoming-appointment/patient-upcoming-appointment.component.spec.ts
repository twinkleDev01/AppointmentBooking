import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientUpcomingAppointmentComponent } from './patient-upcoming-appointment.component';

describe('PatientUpcomingAppointmentComponent', () => {
  let component: PatientUpcomingAppointmentComponent;
  let fixture: ComponentFixture<PatientUpcomingAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientUpcomingAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientUpcomingAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
