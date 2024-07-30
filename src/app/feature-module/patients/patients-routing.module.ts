import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patients.component';
import { PatientInvoiceComponent } from './patient-invoice/patient-invoice.component';
import { PatientAuthGuard } from '../../shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PatientsComponent,
    children: [
      
      {
        path: 'patient-dashboard',
        loadChildren: () =>
          import('./patient-dashboard/patient-dashboard.module').then(
            (m) => m.PatientDashboardModule
          ),
          canActivate: [PatientAuthGuard] // Apply AuthGuard to protect this route
      },
      {
        path: 'profile-settings',
        loadChildren: () =>
          import('./profile-settings/profile-settings.module').then(
            (m) => m.ProfileSettingsModule
          ),
          canActivate: [PatientAuthGuard]
      },
      {
        path: 'medical-records',
        loadChildren: () =>
          import('./medical-records/medical-records.module').then(
            (m) => m.MedicalRecordsModule
          ),
          canActivate: [PatientAuthGuard]
      },
      {
        path: 'appointments',
        loadChildren: () =>
          import('./appointments/appointments.module').then(
            (m) => m.AppointmentsModule
          ),
      },

      {
        path: 'patient-invoice',
        component: PatientInvoiceComponent,
        canActivate: [PatientAuthGuard]
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientsRoutingModule {}
