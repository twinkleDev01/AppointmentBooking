import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorClinicsSettingsComponent } from './doctor-clinics-settings.component';

describe('DoctorClinicsSettingsComponent', () => {
  let component: DoctorClinicsSettingsComponent;
  let fixture: ComponentFixture<DoctorClinicsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorClinicsSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorClinicsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
