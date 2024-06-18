import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentStartComponent } from './doctor-appointment-start.component';

describe('DoctorAppointmentStartComponent', () => {
  let component: DoctorAppointmentStartComponent;
  let fixture: ComponentFixture<DoctorAppointmentStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorAppointmentStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorAppointmentStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
