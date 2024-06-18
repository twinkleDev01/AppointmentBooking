import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-appoinment-details',
  templateUrl: './patient-appoinment-details.component.html',
  styleUrl: './patient-appoinment-details.component.scss'
})
export class PatientAppoinmentDetailsComponent {
  public routes = routes;
}
