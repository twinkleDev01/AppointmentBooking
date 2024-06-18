import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent {
  public routes = routes;
  public selectedValue1 = '';
  selectedList1: data[] = [
    { value: 'Select' },
    { value: 'Dependent 01' },
    { value: 'Dependent 02' },
    { value: 'Dependent 03' },
    { value: 'Dependent 04' },
  ];
  constructor(private router: Router) {}

  public navigation() {
    this.router.navigate([routes.consultation]);
  }
}
