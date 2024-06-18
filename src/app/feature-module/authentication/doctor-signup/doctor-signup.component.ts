import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-signup',
  templateUrl: './doctor-signup.component.html',
  styleUrls: ['./doctor-signup.component.scss'],
})
export class DoctorSignupComponent {
  public togglePasswordClass = false;
  public selectedFieldSet = [0];
  public routes = routes;

  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });

  togglePassword() {
    this.togglePasswordClass = !this.togglePasswordClass;
  }
}
