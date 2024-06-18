import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-upcoming-appointment',
  templateUrl: './patient-upcoming-appointment.component.html',
  styleUrl: './patient-upcoming-appointment.component.scss'
})
export class PatientUpcomingAppointmentComponent {
  public routes = routes;
}
