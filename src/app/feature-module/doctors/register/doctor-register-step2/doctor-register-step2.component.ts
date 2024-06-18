import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-doctor-register-step2',
  templateUrl: './doctor-register-step2.component.html',
  styleUrls: ['./doctor-register-step2.component.scss']
})
export class DoctorRegisterStep2Component {
  public routes = routes;
  displayStyle = 'none';

  toggleDisplay() {
    this.displayStyle = this.displayStyle === 'none' ? 'block' : 'none';
  }
}
