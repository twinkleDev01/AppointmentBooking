import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorInsuranceSettingsComponent } from './doctor-insurance-settings.component';

describe('DoctorInsuranceSettingsComponent', () => {
  let component: DoctorInsuranceSettingsComponent;
  let fixture: ComponentFixture<DoctorInsuranceSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorInsuranceSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorInsuranceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
