import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppointmentGridComponent } from './patient-appointment-grid.component';

describe('PatientAppointmentGridComponent', () => {
  let component: PatientAppointmentGridComponent;
  let fixture: ComponentFixture<PatientAppointmentGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientAppointmentGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientAppointmentGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
