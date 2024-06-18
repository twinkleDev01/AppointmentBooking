import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-appointment-grid',
  templateUrl: './patient-appointment-grid.component.html',
  styleUrl: './patient-appointment-grid.component.scss'
})
export class PatientAppointmentGridComponent {
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
