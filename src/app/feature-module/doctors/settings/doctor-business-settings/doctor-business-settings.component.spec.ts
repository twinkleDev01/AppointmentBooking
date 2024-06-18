import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorBusinessSettingsComponent } from './doctor-business-settings.component';

describe('DoctorBusinessSettingsComponent', () => {
  let component: DoctorBusinessSettingsComponent;
  let fixture: ComponentFixture<DoctorBusinessSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorBusinessSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorBusinessSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
