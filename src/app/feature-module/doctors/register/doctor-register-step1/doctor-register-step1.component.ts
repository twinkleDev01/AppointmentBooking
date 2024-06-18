import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-doctor-register-step1',
  templateUrl: './doctor-register-step1.component.html',
  styleUrls: ['./doctor-register-step1.component.scss']
})
export class DoctorRegisterStep1Component {
  public routes = routes;

}
