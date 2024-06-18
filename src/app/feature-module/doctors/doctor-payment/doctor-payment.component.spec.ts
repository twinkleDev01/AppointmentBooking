import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPaymentComponent } from './doctor-payment.component';

describe('DoctorPaymentComponent', () => {
  let component: DoctorPaymentComponent;
  let fixture: ComponentFixture<DoctorPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctorPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
