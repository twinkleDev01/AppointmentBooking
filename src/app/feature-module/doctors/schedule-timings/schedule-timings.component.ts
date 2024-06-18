import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-schedule-timings',
  templateUrl: './schedule-timings.component.html',
  styleUrls: ['./schedule-timings.component.scss']
})
export class ScheduleTimingsComponent {
  public routes = routes;
  public isClassAdded: boolean[] = [false];


  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
}
