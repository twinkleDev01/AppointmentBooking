import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface medical {

}
@Component({
  selector: 'app-doctor-appointment-start',
  templateUrl: './doctor-appointment-start.component.html',
  styleUrl: './doctor-appointment-start.component.scss'
})
export class DoctorAppointmentStartComponent {
  public routes = routes;
  values1: string[] = ['Skin Allergy'];
  values2: string[] = ['Hemoglobin A1c (HbA1c)', 'Liver Function Tests (LFTs)'];
  values3: string[] = ['Fever', 'Headache', 'Stomach Pain'];

  medical: medical[] = [{}];


  addMedical() {
    this.medical.push({});
  }

  dltMedical(index: number) {
    this.medical.splice(index, 1);
  }
}
