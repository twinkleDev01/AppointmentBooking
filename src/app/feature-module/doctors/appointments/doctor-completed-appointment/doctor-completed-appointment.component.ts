import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-completed-appointment',
  templateUrl: './doctor-completed-appointment.component.html',
  styleUrl: './doctor-completed-appointment.component.scss'
})
export class DoctorCompletedAppointmentComponent {
  public routes = routes

}
