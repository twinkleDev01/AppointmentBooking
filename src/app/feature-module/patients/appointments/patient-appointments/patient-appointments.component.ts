import { DatePipe } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsDaterangepickerConfig, BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-appointments',
  templateUrl: './patient-appointments.component.html',
  styleUrl: './patient-appointments.component.scss',
  providers: [DatePipe]
})
export class PatientAppointmentsComponent {
  public routes = routes;
  public filter = false;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  appointmentsDetail:any;
  activeTab: string = 'upcoming';
  startDate:any
  endDate:any;
  // @ViewChild('dateRangePicker') dateRangePicker!: ElementRef;
  @ViewChild(BsDaterangepickerDirective, { static: false }) datepicker!: BsDaterangepickerDirective;
  constructor(private patientsService:PatientsService,private datePipe: DatePipe,private router:Router, private renderer: Renderer2) {
    this.bsRangeValue = [this.startDate, this.endDate];
  }

  ngOnInit(){
    
    this.getAppointmentData(this.activeTab)
  }
  public showFilter(){
    this.filter = !this.filter
  }

  dateSelectionChanged(event: any) {
    this.startDate = event[0];
    this.endDate = event[1];
    console.log(this.startDate, this.endDate)
    this.startDate = this.datePipe.transform(this.startDate, 'yyyy-MM-dd'), 
    this.endDate = this.datePipe.transform(this.endDate, 'yyyy-MM-dd')
    this.showFilterData(this.activeTab)
  }
  getAppointmentData(tabName?:any){

    let isCancelled: boolean | undefined;
    let isCompleted: boolean | undefined;
    let isUpcoming: boolean | undefined;
  
    switch (tabName) {
      case 'cancelled':
        isCancelled = true;
        break;
      case 'completed':
        isCompleted = true;
        break;
      case 'upcoming':
        isUpcoming = true;
        break;
    }

    this.patientsService.getAppointment(this.startDate,this.endDate,isCancelled, isCompleted, isUpcoming).subscribe((res:any)=>{
      console.log(res.data.appointments,"24")
      this.appointmentsDetail = res
    }) 
  }
  showFilterData(tabName: string) {
    this.activeTab = tabName;
    console.log('Active Tab:', this.activeTab);
    this.getAppointmentData(this.activeTab)
  }
  navigateToPatientUpcomingAppointment(data:any) {
    this.router.navigate(['/patients/appointments/patient-upcoming-appointment'], {
      state: { appointment: data },
    });
  }
  ngAfterViewInit() {
   // Listen to the onShown event of the datepicker
   this.datepicker.onShown.subscribe(() => {
    const datepickerContainer = document.querySelector('bs-daterangepicker-container');
    if (datepickerContainer) {
      this.renderer.addClass(datepickerContainer, 'custom-daterangepicker-container');
    }
  });
  }
  convertToUrl(filePath:string) {
    const baseUrl = "https://bookingapi.asptask.in/";
    const urlPath = filePath.replace(/\\/g, '/').replace('D:/Inetpub/vhosts/getsocialmediafollower.com/bookingapi.asptask.in/wwwroot/', '');
    const fullUrl = baseUrl + urlPath;
    return fullUrl;
}
}
