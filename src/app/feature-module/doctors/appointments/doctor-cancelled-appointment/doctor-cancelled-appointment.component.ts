import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-cancelled-appointment',
  templateUrl: './doctor-cancelled-appointment.component.html',
  styleUrl: './doctor-cancelled-appointment.component.scss'
})
export class DoctorCancelledAppointmentComponent {
  public routes = routes

}
