import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { PatientCancelledAppointmentComponent } from './patient-cancelled-appointment/patient-cancelled-appointment.component';
import { PatientCompletedAppointmentComponent } from './patient-completed-appointment/patient-completed-appointment.component';
import { PatientUpcomingAppointmentComponent } from './patient-upcoming-appointment/patient-upcoming-appointment.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { PatientAppoinmentDetailsComponent } from './patient-appoinment-details/patient-appoinment-details.component';
import { PatientAppointmentGridComponent } from './patient-appointment-grid/patient-appointment-grid.component';
import { PatientAuthGuard } from 'src/app/shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent,
    children: [
      {
        path: 'patient-cancelled-appointment',
        component: PatientCancelledAppointmentComponent,
      },
      {
        path: 'patient-completed-appointment',
        component: PatientCompletedAppointmentComponent,
      },
      {
        path: 'patient-upcoming-appointment',
        component: PatientUpcomingAppointmentComponent,
        canActivate: [PatientAuthGuard]
      },
      {
        path: 'patient-appointments',
        component: PatientAppointmentsComponent,
        canActivate: [PatientAuthGuard]
      },
      {
        path: 'patient-appointment-details',
        component: PatientAppoinmentDetailsComponent,
      },
      {
        path: 'patient-appointment-grid',
        component: PatientAppointmentGridComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
