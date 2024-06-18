import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAppointmentsGridComponent } from './doctor-appointments-grid.component';

describe('DoctorAppointmentsGridComponent', () => {
  let component: DoctorAppointmentsGridComponent;
  let fixture: ComponentFixture<DoctorAppointmentsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorAppointmentsGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorAppointmentsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
