import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-appointments-grid',
  templateUrl: './doctor-appointments-grid.component.html',
  styleUrl: './doctor-appointments-grid.component.scss'
})
export class DoctorAppointmentsGridComponent {
  public routes = routes;
  public filter = false;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();

  constructor() {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
  }
  public showFilter(){
    this.filter = !this.filter
  }
}
