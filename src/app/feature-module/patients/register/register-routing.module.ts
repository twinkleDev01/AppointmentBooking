import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      {
        path: 'patient-register-step1',
        loadChildren: () =>
          import('./patient-register-step1/patient-register-step1.module').then(
            (m) => m.PatientRegisterStep1Module
          ),
      },
      {
        path: 'patient-register-step2',
        loadChildren: () =>
          import('./patient-register-step2/patient-register-step2.module').then(
            (m) => m.PatientRegisterStep2Module
          ),
      },
      {
        path: 'patient-register-step3',
        loadChildren: () =>
          import('./patient-register-step3/patient-register-step3.module').then(
            (m) => m.PatientRegisterStep3Module
          ),
      },
      {
        path: 'patient-register-step4',
        loadChildren: () =>
          import('./patient-register-step4/patient-register-step4.module').then(
            (m) => m.PatientRegisterStep4Module
          ),
      },
      {
        path: 'patient-register-step5',
        loadChildren: () =>
          import('./patient-register-step5/patient-register-step5.module').then(
            (m) => m.PatientRegisterStep5Module
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
