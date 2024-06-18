import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-doctor-search-grid',
  templateUrl: './doctor-search-grid.component.html',
  styleUrls: ['./doctor-search-grid.component.scss']
})
export class DoctorSearchGridComponent {
  minvalue = 251;
  maxvalue = 401;
  public routes = routes;
  public isCollapsed = true;
  isClassAdded: boolean[] = [false];
  public selectedValue = '';
  
  selectedList: data[] = [
    { value: 'A to Z' },
    { value: 'B to Z' },
    { value: 'C to Z' },
    { value: 'D to Z' },
    { value: 'E to Z' },
  ];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
  isCollapsedExperience = false;
  isCollapsedSpeciality = false;
  isCollapsedConsultation = false;

  toggleCollapse(listType: 'experience' | 'speciality' | 'consultation') {
    if (listType === 'experience') {
      this.isCollapsedExperience = !this.isCollapsedExperience;
    } else if (listType === 'speciality') {
      this.isCollapsedSpeciality = !this.isCollapsedSpeciality;
    } else if (listType === 'consultation') {
      this.isCollapsedConsultation = !this.isCollapsedConsultation;
    }
  }
  
  

}