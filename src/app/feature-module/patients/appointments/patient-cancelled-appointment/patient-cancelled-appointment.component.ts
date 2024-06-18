import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-cancelled-appointment',
  templateUrl: './patient-cancelled-appointment.component.html',
  styleUrl: './patient-cancelled-appointment.component.scss'
})
export class PatientCancelledAppointmentComponent {
  public routes = routes

}
