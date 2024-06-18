import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-patient-signup',
  templateUrl: './patient-signup.component.html',
  styleUrls: ['./patient-signup.component.scss']
})
export class PatientSignupComponent {
  public routes = routes;
  constructor(private router: Router) {}

  public navigation() {
    this.router.navigate([routes.signupSuccess]);
  }
  phoneForm = new FormGroup({
    phone: new FormControl(undefined, [Validators.required]),
  });
}
