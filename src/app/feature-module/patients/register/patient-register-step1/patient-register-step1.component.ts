import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-patient-register-step1',
  templateUrl: './patient-register-step1.component.html',
  styleUrls: ['./patient-register-step1.component.scss']
})
export class PatientRegisterStep1Component {
  public routes = routes

}
