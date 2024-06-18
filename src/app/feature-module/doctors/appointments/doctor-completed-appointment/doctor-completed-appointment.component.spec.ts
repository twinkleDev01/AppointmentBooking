import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCompletedAppointmentComponent } from './doctor-completed-appointment.component';

describe('DoctorCompletedAppointmentComponent', () => {
  let component: DoctorCompletedAppointmentComponent;
  let fixture: ComponentFixture<DoctorCompletedAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorCompletedAppointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorCompletedAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
