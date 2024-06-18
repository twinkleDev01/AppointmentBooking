import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface education {
}

@Component({
  selector: 'app-doctor-clinics-settings',
  templateUrl: './doctor-clinics-settings.component.html',
  styleUrl: './doctor-clinics-settings.component.scss',
})
export class DoctorClinicsSettingsComponent {
  public routes = routes;
  education: Array<education> = [];

  addEducationFunc() {
    this.education.push(1);
  }
  deleteEducationFunc(index: number) {
    this.education.splice(index, 1);
  }
}
