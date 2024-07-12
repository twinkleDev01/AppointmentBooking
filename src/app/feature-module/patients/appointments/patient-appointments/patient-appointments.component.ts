import { DatePipe } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsDaterangepickerConfig, BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';
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
  isModalOpen = false;
  selectedDate: Date = new Date();
  minDate!: Date;
  filteredAppointments: any;
  selectedTimeSlot: any;
  slots: any;
  selectedSlots: any[] = [];
  slotConfirmed: boolean=false;
  selectedAppointmentId:any
  // @ViewChild('dateRangePicker') dateRangePicker!: ElementRef;
  @ViewChild(BsDaterangepickerDirective, { static: false }) datepicker!: BsDaterangepickerDirective;
  constructor(private patientsService:PatientsService,private datePipe: DatePipe,private router:Router, private renderer: Renderer2,private toastr:ToastrService) {
    this.bsRangeValue = [this.startDate, this.endDate];
    this.minDate = new Date();
  }

  ngOnInit(){
    this.getAvailableSlots();
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
      console.log(res?.data?.appointments,"24")
      this.appointmentsDetail = res
    }) 
  }
  tempSelectedTimeSlot:any
  onSelectTimeSlot(slot: any) {
    // this.selectedTimeSlot = slot;
    this.tempSelectedTimeSlot = slot; // Store the time slot temporarily
    console.log(this.tempSelectedTimeSlot,"24")
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
    const urlPath = filePath?.replace(/\\/g, '/')?.replace('D:/Inetpub/vhosts/getsocialmediafollower.com/bookingapi.asptask.in/wwwroot/', '');
    const fullUrl = baseUrl + urlPath;
    return fullUrl;
}
handleImageError(event: Event): void {
  const target = event.target as HTMLImageElement;
  target.src = '../../../../assets/img/dummy/doload.jpg'; // Specify the path to your default image
}
isButtonDisabled(appointmentDate: string, appointmentTime: string): boolean {
  const currentDateTime = new Date()
  const appointmentDateTimeString = `${appointmentDate.slice(0, 10)}T${appointmentTime}`;
  const appointmentDateTime = new Date(appointmentDateTimeString);
  if (isNaN(appointmentDateTime.getTime())) {
    return false;
  }
  const timeDifference = appointmentDateTime.getTime() - currentDateTime.getTime();
  const hoursDifference = timeDifference / (1000 * 60 * 60);
  return hoursDifference <= 24;
}
openModal(data:any): void {
  this.isModalOpen = true;
  this.selectedAppointmentId=data.appointmentId
}
closeModal(): void {
  this.isModalOpen = false;
}
onSelectDate(event: any) {
  console.log('Date selected:', event);
  const date = event?.target?.value;
  if (date) {
    this.selectedDate = date;
    for (const slot of this.slots) {
      console.log(slot.date);
    }
    this.selectedSlots = this.slots.filter(
      (slot: { startTime: string; date: string }) =>
        this.isSameDay(slot.date, this.selectedDate)
    );
  }
}
isSameDay(slotDate: string, selectedDate: Date): boolean {
  const slotDateTime = new Date(slotDate).toDateString(); // Extract date part only
  const selectedDateTime = selectedDate.toDateString(); // Extract date part only
  return slotDateTime === selectedDateTime;
}
getAvailableSlots() {
  this.patientsService.getAvailableSlot().subscribe((availableSlots) => {
    this.slots = availableSlots;
    this.generateUniqueTimeSlots();
    this.selectedDate = new Date();  // Initialize with the current date
    console.log('Component initialized with current date:', this.selectedDate);
    this.filterAppointments(this.formatDate(this.selectedDate));
  });
}

generateUniqueTimeSlots() {
  const timeSlotsMap = new Map();
  this.slots.forEach((slot: { startTime: any }) => {
    if (!timeSlotsMap.has(slot.startTime)) {
      timeSlotsMap.set(slot.startTime, slot);
    }
  });
}
onDateChange(event: any) {
  console.log('date change',event);
  this.selectedDate = event;
  this.filterAppointments(this.formatDate(this.selectedDate));
}

filterAppointments(date: any) {
  console.log('Date:', date);
  this.filteredAppointments = this.slots.filter(
    (appointment:any) => appointment.date === date
  );
  console.log('Appointments:', this.filteredAppointments)
}
confirmSlot(): void {
  console.log(this.tempSelectedTimeSlot.startTime,this.selectedDate,this.convertToISOFormat(this.tempSelectedTimeSlot.startTime,this.selectedDate));
  const data={
    
      "startTime": this.convertToISOFormat(this.tempSelectedTimeSlot.startTime,this.selectedDate),
      "duration": 15,
      "timezone": "Asia/Kolkata"
    
  }
 this.patientsService.rescheduleMeeting(data,this.selectedAppointmentId).subscribe((res:any)=>{
  console.log(res,"39")
  this.closeModal();
  this.toastr.success("Appointment rescheduled successfully");
  this.getAvailableSlots();
  this.getAppointmentData(this.activeTab)
  this.isModalOpen = false;
 })
}
convertToISOFormat(timeStr:any, dateStr:any) {
  const inputDate = new Date(dateStr);
  const year = inputDate.getFullYear();
  const month = String(inputDate.getMonth() + 1).padStart(2, '0'); 
  const day = String(inputDate.getDate()).padStart(2, '0');
  const combinedDateTimeStr = `${year}-${month}-${day}T${timeStr}.000Z`;
  const combinedDateTime = new Date(combinedDateTimeStr);
  const output = combinedDateTime.toISOString();
  return output;
}
formatDate(date: any): string {
  console.log('Formatted date:', `${date.getFullYear()}-${this.padZero(date.getMonth() + 1)}-${this.padZero(
    date.getDate()
  )}T00:00:00`);
  return `${date.getFullYear()}-${this.padZero(date.getMonth() + 1)}-${this.padZero(
    date.getDate()
  )}T00:00:00`;
}


padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
}
