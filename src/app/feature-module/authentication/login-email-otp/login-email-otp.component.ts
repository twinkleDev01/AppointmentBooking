import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-login-email-otp',
  templateUrl: './login-email-otp.component.html',
  styleUrls: ['./login-email-otp.component.scss']
})
export class LoginEmailOtpComponent {
  public routes = routes;
  constructor(private router: Router) {}

  public navigation() {
    this.router.navigate([routes.emailOtp]);
  }
}
