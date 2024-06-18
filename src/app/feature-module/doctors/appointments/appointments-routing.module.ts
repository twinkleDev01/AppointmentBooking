import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { DoctorCancelledAppointmentComponent } from './doctor-cancelled-appointment/doctor-cancelled-appointment.component';
import { DoctorCancelledAppointment2Component } from './doctor-cancelled-appointment2/doctor-cancelled-appointment2.component';
import { DoctorCompletedAppointmentComponent } from './doctor-completed-appointment/doctor-completed-appointment.component';
import { DoctorAppointmentsGridComponent } from './doctor-appointments-grid/doctor-appointments-grid.component';
import { DoctorAppointmentStartComponent } from './doctor-appointment-start/doctor-appointment-start.component';
import { DoctorUpcomingAppointmentDetailsComponent } from './doctor-upcoming-appointment-details/doctor-upcoming-appointment-details.component';
import { DoctorAppointmentDetailsComponent } from './doctor-appointment-details/doctor-appointment-details.component';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent,
    children: [
      {
        path: 'appointment-list',
        component: AppointmentListComponent,
      },
      {
        path: 'doctor-cancelled-appointment',
        component:DoctorCancelledAppointmentComponent,
      },
      {
        path: 'doctor-cancelled-appointment2',
        component:DoctorCancelledAppointment2Component,
      },
      {
        path: 'doctor-completed-appointment',
        component:DoctorCompletedAppointmentComponent,
      },
      {
        path: 'doctor-appointments-grid',
        component: DoctorAppointmentsGridComponent,
      },
      {
        path: 'doctor-appointment-start',
        component: DoctorAppointmentStartComponent,
      },
      {
        path: 'doctor-upcoming-appointment-details',
        component: DoctorUpcomingAppointmentDetailsComponent
      },
      {
        path: 'doctor-appointment-details',
        component: DoctorAppointmentDetailsComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
