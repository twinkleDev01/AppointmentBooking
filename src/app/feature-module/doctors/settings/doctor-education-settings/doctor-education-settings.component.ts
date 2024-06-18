import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-education-settings',
  templateUrl: './doctor-education-settings.component.html',
  styleUrl: './doctor-education-settings.component.scss'
})
export class DoctorEducationSettingsComponent {
  public routes = routes
  education: Array<number> = []

  addEducationFunc(){
    this.education.push(1);
  }
  deleteEducationFunc(index: number) {
    this.education.splice(index, 1); 
}

}
