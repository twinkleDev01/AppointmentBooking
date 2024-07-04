import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { PatientCancelledAppointmentComponent } from './patient-cancelled-appointment/patient-cancelled-appointment.component';
import { PatientCompletedAppointmentComponent } from './patient-completed-appointment/patient-completed-appointment.component';
import { PatientUpcomingAppointmentComponent } from './patient-upcoming-appointment/patient-upcoming-appointment.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PatientAppoinmentDetailsComponent } from './patient-appoinment-details/patient-appoinment-details.component';
import { PatientAppointmentGridComponent } from './patient-appointment-grid/patient-appointment-grid.component';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppointmentsComponent,
    PatientCancelledAppointmentComponent,
    PatientCompletedAppointmentComponent,
    PatientUpcomingAppointmentComponent,
    PatientAppointmentsComponent,
    PatientAppoinmentDetailsComponent,
    PatientAppointmentGridComponent
  ],
  imports: [CommonModule, AppointmentsRoutingModule, SharedModule,FormsModule,CalendarModule],
})
export class AppointmentsModule {}
