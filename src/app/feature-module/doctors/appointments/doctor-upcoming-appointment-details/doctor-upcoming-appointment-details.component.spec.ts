import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorUpcomingAppointmentDetailsComponent } from './doctor-upcoming-appointment-details.component';

describe('DoctorUpcomingAppointmentDetailsComponent', () => {
  let component: DoctorUpcomingAppointmentDetailsComponent;
  let fixture: ComponentFixture<DoctorUpcomingAppointmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorUpcomingAppointmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorUpcomingAppointmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
