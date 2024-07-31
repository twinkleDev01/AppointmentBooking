import { Component } from '@angular/core';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { routes } from 'src/app/shared/routes/routes';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-patient-invoice',
  templateUrl: './patient-invoice.component.html',
  styleUrl: './patient-invoice.component.scss'
})
export class PatientInvoiceComponent {
  public routes = routes;
  invoices:any
  filterinvoice:any
  searchTerm!: string;
  baseUrl: string = environment.ImgBaseUrl
  constructor(private patientsService:PatientsService){
    this.GetInvoices()
  }
  ngOninit(){
    // this.GetInvoices()
  }

  GetInvoices(){
    this.patientsService.getInvoice().subscribe((res:any)=>{
      this.invoices=res;
      this.filterinvoice=res
    })
  }

  filterAppointments() {
    const term = this.searchTerm.toLowerCase();
    if(term.length>0){
      this.filterinvoice = this.invoices.filter((appointment: any) => 
        appointment.doctorName.toLowerCase().includes(term) ||
        appointment.appointmentDate.toLowerCase().includes(term) ||
        appointment.bookedDate.toLowerCase().includes(term) ||
        appointment.amount?.toString().toLowerCase().includes(term)
      );
    }
    else{
      this.filterinvoice=this.invoices
    }
   
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
    const matchingObj = this.invoices.find((invoice:any)=>invoice.id == invoiceObject.id);
this.patientsService.invoiceData.next(matchingObj);
  } 

  generateImageUrl(imageId:any) {
    return `${this.baseUrl}${imageId}`;
  }
handleImageError(event: Event): void {
  const target = event.target as HTMLImageElement;
  target.src = 'https://images.prismic.io/skinify/ZqnVuR5LeNNTxoko_doload.jpg?auto=format,compress'; // Specify the path to your default image
}
}
