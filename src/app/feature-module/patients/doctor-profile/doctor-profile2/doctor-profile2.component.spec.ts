import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfile2Component } from './doctor-profile2.component';

describe('DoctorProfile2Component', () => {
  let component: DoctorProfile2Component;
  let fixture: ComponentFixture<DoctorProfile2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorProfile2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorProfile2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
