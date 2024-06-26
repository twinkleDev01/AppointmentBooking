import { Component } from '@angular/core';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-invoice',
  templateUrl: './patient-invoice.component.html',
  styleUrl: './patient-invoice.component.scss'
})
export class PatientInvoiceComponent {
  public routes = routes;
  invoices:any
  constructor(private patientsService:PatientsService){
    this.GetInvoices()
  }
  ngOninit(){
    this.GetInvoices()
  }

  GetInvoices(){
    this.patientsService.getInvoice().subscribe((res:any)=>{
      console.log(res);
    })
  }
}
