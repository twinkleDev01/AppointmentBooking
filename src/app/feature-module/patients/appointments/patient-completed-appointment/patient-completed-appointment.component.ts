import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-completed-appointment',
  templateUrl: './patient-completed-appointment.component.html',
  styleUrl: './patient-completed-appointment.component.scss'
})
export class PatientCompletedAppointmentComponent {
  public routes = routes;
}
