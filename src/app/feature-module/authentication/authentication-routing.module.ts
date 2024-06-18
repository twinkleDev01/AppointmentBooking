import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login-email',
        loadChildren: () =>
          import('./login-email/login-email.module').then(
            (m) => m.LoginEmailModule
          ),
      },
      {
        path: 'login-phone',
        loadChildren: () =>
          import('./login-phone/login-phone.module').then(
            (m) => m.LoginPhoneModule
          ),
      },
      {
        path: 'doctor-signup',
        loadChildren: () =>
          import('./doctor-signup/doctor-signup.module').then(
            (m) => m.DoctorSignupModule
          ),
      },
      {
        path: 'patient-signup',
        loadChildren: () =>
          import('./patient-signup/patient-signup.module').then(
            (m) => m.PatientSignupModule
          ),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
      {
        path: 'forgot-password2',
        loadChildren: () =>
          import('./forgot-password2/forgot-password2.module').then(
            (m) => m.ForgotPassword2Module
          ),
      },
      {
        path: 'login-email-otp',
        loadChildren: () =>
          import('./login-email-otp/login-email-otp.module').then(
            (m) => m.LoginEmailOtpModule
          ),
      },
      {
        path: 'login-phone-otp',
        loadChildren: () =>
          import('./login-phone-otp/login-phone-otp.module').then(
            (m) => m.LoginPhoneOtpModule
          ),
      },
      {
        path: 'signup-success',
        loadChildren: () =>
          import('./signup-success/signup-success.module').then(
            (m) => m.SignupSuccessModule
          ),
      },
      {
        path: 'reset-password',
        loadChildren: () =>
          import('./reset-password/reset-password.module').then(
            (m) => m.ResetPasswordModule
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
      {
        path: 'mobile-otp',
        loadChildren: () =>
          import('./mobile-otp/mobile-otp.module').then(
            (m) => m.MobileOtpModule
          ),
      },
      {
        path: 'email-otp',
        loadChildren: () =>
          import('./email-otp/email-otp.module').then((m) => m.EmailOtpModule),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
