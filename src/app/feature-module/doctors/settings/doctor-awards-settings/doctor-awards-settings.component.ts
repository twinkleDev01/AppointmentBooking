import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface award {
}
@Component({
  selector: 'app-doctor-awards-settings',
  templateUrl: './doctor-awards-settings.component.html',
  styleUrl: './doctor-awards-settings.component.scss'
})
export class DoctorAwardsSettingsComponent {
  public routes = routes;
  award: Array<award> = []

  addAward() {
    this.award.push(1)
  }
}
