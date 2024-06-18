import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEmailOtpComponent } from './login-email-otp.component';

describe('LoginEmailOtpComponent', () => {
  let component: LoginEmailOtpComponent;
  let fixture: ComponentFixture<LoginEmailOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginEmailOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginEmailOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
