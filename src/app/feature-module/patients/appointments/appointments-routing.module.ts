import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments.component';
import { PatientUpcomingAppointmentComponent } from './patient-upcoming-appointment/patient-upcoming-appointment.component';
import { PatientAppointmentsComponent } from './patient-appointments/patient-appointments.component';
import { PatientAuthGuard } from 'src/app/shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppointmentsComponent,
    children: [
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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {}
