import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-upcoming-appointment',
  templateUrl: './patient-upcoming-appointment.component.html',
  styleUrl: './patient-upcoming-appointment.component.scss'
})
export class PatientUpcomingAppointmentComponent implements OnInit {
  appointmentData:any
  public routes = routes;
  isImageModalOpen: boolean = false;
  selectedImageUrl!: string;
  files: { name: string, url: string, type: string }[] = [];
  activeIndex = 0;
  ngOnInit(): void {
    if (history.state && history.state.appointment) {
      this.appointmentData = history.state.appointment;
      console.log('appointmentData', this.appointmentData);
    }
  }
formatDate(inputDate:any) {
    const date = new Date(inputDate);
  
    const day = date.getDate().toString().padStart(2, '0'); // Ensure two digits
    const month = date.toLocaleString('default', { month: 'long' }); // Get full month name
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  }
  
  openImagePreviewModal() {
    if (this.files.length > 0) {
      this.isImageModalOpen = true;
    }
  }
  openImageModal(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.isImageModalOpen = false;
  }
  next(): void {
    this.activeIndex = (this.activeIndex === this.files.length - 1) ? 0 : (this.activeIndex + 1);
  }
  prev(): void {
    this.activeIndex = (this.activeIndex === 0) ? (this.files.length - 1) : (this.activeIndex - 1);
  }
}
