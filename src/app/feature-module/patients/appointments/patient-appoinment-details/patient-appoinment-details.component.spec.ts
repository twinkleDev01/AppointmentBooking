import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAppoinmentDetailsComponent } from './patient-appoinment-details.component';

describe('PatientAppoinmentDetailsComponent', () => {
  let component: PatientAppoinmentDetailsComponent;
  let fixture: ComponentFixture<PatientAppoinmentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientAppoinmentDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientAppoinmentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
