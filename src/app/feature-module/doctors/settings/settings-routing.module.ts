import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { DoctorProfileSettingsComponent } from './doctor-profile-settings/doctor-profile-settings.component';
import { DoctorInsuranceSettingsComponent } from './doctor-insurance-settings/doctor-insurance-settings.component';
import { DoctorBusinessSettingsComponent } from './doctor-business-settings/doctor-business-settings.component';
import { DoctorClinicsSettingsComponent } from './doctor-clinics-settings/doctor-clinics-settings.component';
import { DoctorEducationSettingsComponent } from './doctor-education-settings/doctor-education-settings.component';
import { DoctorExperienceSettingsComponent } from './doctor-experience-settings/doctor-experience-settings.component';
import { DoctorAwardsSettingsComponent } from './doctor-awards-settings/doctor-awards-settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      {
        path: 'doctor-profile-settings',
        component: DoctorProfileSettingsComponent,
      },
      {
        path: 'doctor-insurance-settings',
        component: DoctorInsuranceSettingsComponent,
      },
      {
        path: 'doctor-business-settings',
        component: DoctorBusinessSettingsComponent,
      },
      {
        path: 'doctor-clinics-settings',
        component: DoctorClinicsSettingsComponent,
      },
      {
        path: 'doctor-education-settings',
        component: DoctorEducationSettingsComponent,
      },
      {
        path: 'doctor-experience-settings',
        component: DoctorExperienceSettingsComponent,
      },
      {
        path: 'doctor-awards-settings',
        component: DoctorAwardsSettingsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
