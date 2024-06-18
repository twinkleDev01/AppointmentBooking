import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCompletedAppointmentComponent } from './patient-completed-appointment.component';

describe('PatientCompletedAppointmentComponent', () => {
  let component: PatientCompletedAppointmentComponent;
  let fixture: ComponentFixture<PatientCompletedAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientCompletedAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientCompletedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
