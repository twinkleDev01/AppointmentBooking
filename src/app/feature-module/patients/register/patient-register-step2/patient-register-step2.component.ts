import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-patient-register-step2',
  templateUrl: './patient-register-step2.component.html',
  styleUrls: ['./patient-register-step2.component.scss']
})
export class PatientRegisterStep2Component {
  public routes = routes;
  displayStyle = 'none';
  selectedOption = 'Male';

  toggleDisplay() {
    this.displayStyle = this.displayStyle === 'none' ? 'block' : 'none';
  }

}
