import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-invoice',
  templateUrl: './patient-invoice.component.html',
  styleUrl: './patient-invoice.component.scss'
})
export class PatientInvoiceComponent {
  public routes = routes;
}
