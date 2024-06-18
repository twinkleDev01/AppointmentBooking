import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-insurance-settings',
  templateUrl: './doctor-insurance-settings.component.html',
  styleUrl: './doctor-insurance-settings.component.scss'
})
export class DoctorInsuranceSettingsComponent {
  public routes = routes
  education: Array<number> = []

  addEducationFunc(){
    this.education.push(1);
  }
  deleteEducationFunc(index: number) {
    this.education.splice(index, 1); 
}
}
