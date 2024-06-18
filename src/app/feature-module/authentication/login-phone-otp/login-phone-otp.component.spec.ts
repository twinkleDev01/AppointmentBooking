import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPhoneOtpComponent } from './login-phone-otp.component';

describe('LoginPhoneOtpComponent', () => {
  let component: LoginPhoneOtpComponent;
  let fixture: ComponentFixture<LoginPhoneOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPhoneOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPhoneOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
