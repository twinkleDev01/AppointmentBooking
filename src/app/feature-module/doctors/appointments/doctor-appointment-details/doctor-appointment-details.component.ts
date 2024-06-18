import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-appointment-details',
  templateUrl: './doctor-appointment-details.component.html',
  styleUrl: './doctor-appointment-details.component.scss'
})
export class DoctorAppointmentDetailsComponent {
  public routes = routes;
}
