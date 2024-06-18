import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      {
        path: 'doctor-register',
        loadChildren: () =>
          import('./doctor-register/doctor-register.module').then(
            (m) => m.DoctorRegisterModule
          ),
      },
      {
        path: 'doctor-register-step1',
        loadChildren: () =>
          import('./doctor-register-step1/doctor-register-step1.module').then(
            (m) => m.DoctorRegisterStep1Module
          ),
      },
      {
        path: 'doctor-register-step2',
        loadChildren: () =>
          import('./doctor-register-step2/doctor-register-step2.module').then(
            (m) => m.DoctorRegisterStep2Module
          ),
      },
      {
        path: 'doctor-register-step3',
        loadChildren: () =>
          import('./doctor-register-step3/doctor-register-step3.module').then(
            (m) => m.DoctorRegisterStep3Module
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
