import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-upcoming-appointment-details',
  templateUrl: './doctor-upcoming-appointment-details.component.html',
  styleUrl: './doctor-upcoming-appointment-details.component.scss'
})
export class DoctorUpcomingAppointmentDetailsComponent {
  public routes = routes;
}
