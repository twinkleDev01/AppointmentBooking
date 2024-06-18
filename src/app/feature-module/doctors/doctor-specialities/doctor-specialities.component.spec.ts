import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSpecialitiesComponent } from './doctor-specialities.component';

describe('DoctorSpecialitiesComponent', () => {
  let component: DoctorSpecialitiesComponent;
  let fixture: ComponentFixture<DoctorSpecialitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorSpecialitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorSpecialitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
