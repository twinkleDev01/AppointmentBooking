import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorAwardsSettingsComponent } from './doctor-awards-settings.component';

describe('DoctorAwardsSettingsComponent', () => {
  let component: DoctorAwardsSettingsComponent;
  let fixture: ComponentFixture<DoctorAwardsSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorAwardsSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorAwardsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
