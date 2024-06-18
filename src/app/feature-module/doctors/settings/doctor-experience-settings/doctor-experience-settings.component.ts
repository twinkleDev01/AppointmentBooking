import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-experience-settings',
  templateUrl: './doctor-experience-settings.component.html',
  styleUrl: './doctor-experience-settings.component.scss'
})
export class DoctorExperienceSettingsComponent {
  public routes = routes
  education: Array<number> = []

  addEducationFunc(){
    this.education.push(1);
  }
  deleteEducationFunc(index: number) {
    this.education.splice(index, 1); 
}

  
}
