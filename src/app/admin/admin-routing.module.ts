import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminAuthGuard } from '../shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      {
        path: 'appointment-list',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./appointment-list/appointment-list.module').then(
            (m) => m.AppointmentListModule
          ),
      },
      {
        path: 'blank-page',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./blank-page/blank-page.module').then(
            (m) => m.BlankPageModule
          ),
      },
      {
        path: 'components',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./components/components.module').then(
            (m) => m.ComponentsModule
          ),
      },

      {
        path: 'doctor-list',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./doctor-list/doctor-list.module').then(
            (m) => m.DoctorListModule
          ),
      },

      {
        path: 'invoice',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./invoice/invoice.module').then((m) => m.InvoiceModule),
      },

      {
        path: 'patient-list',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./patient-list/patient-list.module').then(
            (m) => m.PatientListModule
          ),
      },
      {
        path: 'profile',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },

      {
        path: 'reviews',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./reviews/reviews.module').then((m) => m.ReviewsModule),
      },
      {
        path: 'settings',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },
      {
        path: 'specialities',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./specialities/specialities.module').then(
            (m) => m.SpecialitiesModule
          ),
      },

      {
        path: 'transactions-list',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./transactions-list/transactions-list.module').then(
            (m) => m.TransactionsListModule
          ),
      },
      {
        path: 'forms',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./forms/forms.module').then((m) => m.FormsModule),
      },
      {
        path: 'errors',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./errors/errors.module').then((m) => m.ErrorsModule),
      },
      {
        path: 'tables',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./tables/tables.module').then((m) => m.TablesModule),
      },
      {
        path: 'reports',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'dashboard',
        canActivate: [AdminAuthGuard],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
