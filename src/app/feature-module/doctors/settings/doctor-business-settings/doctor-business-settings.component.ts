import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-business-settings',
  templateUrl: './doctor-business-settings.component.html',
  styleUrl: './doctor-business-settings.component.scss'
})
export class DoctorBusinessSettingsComponent {
  public routes  = routes
  showTimePicker: Array<string> = []
  selectedDays: string[] = [];
  date = new Date();
  startTime1 = new Date();
  startTime2 = new Date();
  startTime3 = new Date();
  startTime4 = new Date();
  startTime5 = new Date();
  startTime6 = new Date();
  startTime7 = new Date();
  endTime1 = new Date();
  endTime2 = new Date();
  endTime3 = new Date();
  endTime4 = new Date();
  endTime5 = new Date();
  endTime6 = new Date();
  endTime7 = new Date();
  myDateValue!: Date ;
  constructor( private datePipe: DatePipe) { 
    this.selectDay('Monday');
    this.selectDay('Friday');
    this.selectDay('Tuesday');
    this.selectDay('Wednesday');
    this.selectDay('Thursday');
    
  }
  toggleTimePicker(value: string): void {

    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value
    } else {
      this.showTimePicker = []
    }
  }
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date)
    return this.datePipe.transform(selectedDate, 'h:mm a')
  }
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  
  selectDay(day: string): void {
    if (!this.selectedDays.includes(day)) {
      this.selectedDays.push(day);
    } else {
      this.selectedDays = this.selectedDays.filter(d => d !== day);
    }
  }
  isSelected(day: string): boolean {
    return this.selectedDays.includes(day);
  }
}
