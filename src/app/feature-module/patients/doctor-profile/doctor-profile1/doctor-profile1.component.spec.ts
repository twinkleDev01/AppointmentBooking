import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorProfile1Component } from './doctor-profile1.component';

describe('DoctorProfile1Component', () => {
  let component: DoctorProfile1Component;
  let fixture: ComponentFixture<DoctorProfile1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorProfile1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorProfile1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
