import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorExperienceSettingsComponent } from './doctor-experience-settings.component';

describe('DoctorExperienceSettingsComponent', () => {
  let component: DoctorExperienceSettingsComponent;
  let fixture: ComponentFixture<DoctorExperienceSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorExperienceSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorExperienceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
