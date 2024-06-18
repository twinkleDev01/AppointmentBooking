import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRequestComponent } from './doctor-request.component';

describe('DoctorRequestComponent', () => {
  let component: DoctorRequestComponent;
  let fixture: ComponentFixture<DoctorRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctorRequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
