import { DatePipe } from '@angular/common';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsDaterangepickerConfig, BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';
import { ToastrService } from 'ngx-toastr';
import { bufferTime } from 'rxjs';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { routes } from 'src/app/shared/routes/routes';
import { environment } from 'src/environments/environment';

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
  baseUrl: string = environment.ImgBaseUrl
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
      this.appointmentsDetail = res
    }) 
  }
  tempSelectedTimeSlot:any
  onSelectTimeSlot(slot: any) {
    // this.selectedTimeSlot = slot;
    this.tempSelectedTimeSlot = slot; // Store the time slot temporarily
  }
  showFilterData(tabName: string) {
    this.activeTab = tabName;
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
  generateImageUrl(imageId:any) {
    return `${this.baseUrl}${imageId}`;
  }
handleImageError(event: Event): void {
  const target = event.target as HTMLImageElement;
  target.src = 'https://images.prismic.io/skinify/ZqnVuR5LeNNTxoko_doload.jpg?auto=format,compress'; // Specify the path to your default image
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
isAttendButtonDisabled(startTime: string, endTime: string, date: string): boolean {
  const currentDateTime = new Date();
  
  const baseDate = new Date(date);
  
  // Create start and end DateTime by combining the base date with the given times
  const startDateTime = new Date(baseDate);
  const [startHours, startMinutes, startSeconds] = startTime.split(':').map(Number);
  startDateTime.setHours(startHours, startMinutes, startSeconds, 0);

  const endDateTime = new Date(baseDate);
  const [endHours, endMinutes, endSeconds] = endTime.split(':').map(Number);
  endDateTime.setHours(endHours, endMinutes, endSeconds, 0);

  if (isNaN(startDateTime.getTime()) || isNaN(endDateTime.getTime())) {
    return true; // Disable button if the dates are invalid
  }

  // Calculate 5 minutes before the start time
  const startBufferTime = new Date(startDateTime.getTime() - 5 * 60000); // 5 minutes in milliseconds

  // Check if the current time is within the range
  const isWithinRange = currentDateTime >= startBufferTime && currentDateTime <= endDateTime;
  
  return !isWithinRange;
}





attend(url:any){
  window.open(url, '_blank');

}

openModal(data:any): void {
  this.isModalOpen = true;
  this.selectedAppointmentId=data.appointmentId
}
closeModal(): void {
  this.isModalOpen = false;
}
onSelectDate(event: any) {
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
  this.selectedDate = event;
  this.filterAppointments(this.formatDate(this.selectedDate));
}

filterAppointments(date: any) {
  this.filteredAppointments = this.slots.filter(
    (appointment:any) => appointment.date === date
  );
}
confirmSlot(): void {
  const data={
    
      "startTime": this.convertToISOFormat(this.tempSelectedTimeSlot.startTime,this.selectedDate),
      "duration": 15,
      "timezone": "Asia/Kolkata"
    
  }
 this.patientsService.rescheduleMeeting(data,this.selectedAppointmentId).subscribe((res:any)=>{
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
  return `${date.getFullYear()}-${this.padZero(date.getMonth() + 1)}-${this.padZero(
    date.getDate()
  )}T00:00:00`;
}


padZero(num: number): string {
  return num < 10 ? `0${num}` : `${num}`;
}
}
