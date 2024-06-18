import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-request',
  templateUrl: './doctor-request.component.html',
  styleUrl: './doctor-request.component.scss'
})
export class DoctorRequestComponent {
  public routes = routes;
}
