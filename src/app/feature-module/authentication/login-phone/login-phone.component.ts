import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-login-phone',
  templateUrl: './login-phone.component.html',
  styleUrls: ['./login-phone.component.scss'],
})
export class LoginPhoneComponent {
  public routes = routes;
  public togglePasswordClass = false;
  public selectedFieldSet = [0];

  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });

  togglePassword() {
    this.togglePasswordClass = !this.togglePasswordClass;
  }
  constructor(private router: Router) {}

  public navigation() {
    this.router.navigate([routes.loginPhoneOtp]);
  }
}
