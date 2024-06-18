import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEducationSettingsComponent } from './doctor-education-settings.component';

describe('DoctorEducationSettingsComponent', () => {
  let component: DoctorEducationSettingsComponent;
  let fixture: ComponentFixture<DoctorEducationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorEducationSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorEducationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
