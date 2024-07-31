import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
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
  files:any
  activeIndex = 0;
  baseUrl: string = environment.ImgBaseUrl
  constructor(private location: Location) { }
  ngOnInit(): void {
    if (history.state && history.state.appointment) {
      this.appointmentData = history.state.appointment;
      this.files=this.convertToUrls(this.appointmentData.issueImage)
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
  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.files.length) % this.files.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.files.length;
  }
  convertToUrls(filePathsStr: string): string[] {
    const baseUrl = "https://bookingapi.asptask.in/Image/";

    // Parse the string to get the array
    let filePaths: string[];
    try {
        filePaths = JSON.parse(filePathsStr);
    } catch (error) {
        throw new TypeError("Invalid JSON string");
    }

    if (!Array.isArray(filePaths)) {
        throw new TypeError("Parsed data is not an array");
    }

    return filePaths.map(filePath => baseUrl + filePath);
}
  generateImageUrl(imageId:any) {
    return `${this.baseUrl}${imageId}`;
  }
handleImageError(event: Event): void {
  const target = event.target as HTMLImageElement;
  target.src = 'https://images.prismic.io/skinify/ZqnVuR5LeNNTxoko_doload.jpg?auto=format,compress'; 
}
back(){
  this.location.back();
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
}
