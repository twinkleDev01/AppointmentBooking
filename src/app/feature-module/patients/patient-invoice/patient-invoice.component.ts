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
  searchTerm!: string;
  constructor(private patientsService:PatientsService){
    this.GetInvoices()
  }
  ngOninit(){
    // this.GetInvoices()
  }

  GetInvoices(){
    this.patientsService.getInvoice().subscribe((res:any)=>{
      console.log(res);
      this.invoices=res;
    })
  }

  filterAppointments() {
    console.log(this.searchTerm, '175');
    const term = this.searchTerm.toLowerCase();
    this.invoices = this.invoices.filter((appointment: any) => 
      appointment.doctorName.toLowerCase().includes(term) ||
      appointment.appointmentDate.toLowerCase().includes(term) ||
      appointment.bookedDate.toLowerCase().includes(term) ||
      appointment.amount.toString().toLowerCase().includes(term)
    );
  }
  formatDate(dateString:any) {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  }
  sendData(invoiceObject:any){
    console.log(invoiceObject,"obj");
    const matchingObj = this.invoices.find((invoice:any)=>invoice.id == invoiceObject.id);
this.patientsService.invoiceData.next(matchingObj);
  } 

  convertToUrl(filePath:string) {
    const baseUrl = "https://bookingapi.asptask.in/";
    const urlPath = filePath.replace(/\\/g, '/').replace('D:/Inetpub/vhosts/getsocialmediafollower.com/bookingapi.asptask.in/wwwroot/', '');
    const fullUrl = baseUrl + urlPath;
    return fullUrl;
}
handleImageError(event: Event): void {
  const target = event.target as HTMLImageElement;
  target.src = '../../../../assets/img/dummy/doload.jpg'; // Specify the path to your default image
}
}
