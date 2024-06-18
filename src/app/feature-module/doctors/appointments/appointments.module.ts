import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { AppointmentsComponent } from './appointments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DoctorCancelledAppointmentComponent } from './doctor-cancelled-appointment/doctor-cancelled-appointment.component';
import { DoctorCancelledAppointment2Component } from './doctor-cancelled-appointment2/doctor-cancelled-appointment2.component';
import { DoctorCompletedAppointmentComponent } from './doctor-completed-appointment/doctor-completed-appointment.component';
import { DoctorRequestComponent } from '../doctor-request/doctor-request.component';
import { DoctorAppointmentsGridComponent } from './doctor-appointments-grid/doctor-appointments-grid.component';
import { DoctorAppointmentStartComponent } from './doctor-appointment-start/doctor-appointment-start.component';
import { DoctorUpcomingAppointmentDetailsComponent } from './doctor-upcoming-appointment-details/doctor-upcoming-appointment-details.component';
import { DoctorAppointmentDetailsComponent } from './doctor-appointment-details/doctor-appointment-details.component';

@NgModule({
  declarations: [
    AppointmentsComponent,
    AppointmentListComponent,
    DoctorCancelledAppointmentComponent,
    DoctorCompletedAppointmentComponent,
    DoctorRequestComponent,
    DoctorAppointmentsGridComponent,
    DoctorAppointmentStartComponent,
    DoctorCancelledAppointment2Component,
    DoctorUpcomingAppointmentDetailsComponent,
    DoctorAppointmentDetailsComponent
  ],
  imports: [CommonModule, AppointmentsRoutingModule, SharedModule],
})
export class AppointmentsModule {}
