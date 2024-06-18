import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DoctorProfileSettingsComponent } from './doctor-profile-settings/doctor-profile-settings.component';
import { DoctorBusinessSettingsComponent } from './doctor-business-settings/doctor-business-settings.component';
import { DoctorClinicsSettingsComponent } from './doctor-clinics-settings/doctor-clinics-settings.component';
import { DoctorEducationSettingsComponent } from './doctor-education-settings/doctor-education-settings.component';
import { DoctorExperienceSettingsComponent } from './doctor-experience-settings/doctor-experience-settings.component';
import { DoctorInsuranceSettingsComponent } from './doctor-insurance-settings/doctor-insurance-settings.component';
import { DoctorAwardsSettingsComponent } from './doctor-awards-settings/doctor-awards-settings.component';

@NgModule({
  declarations: [
    SettingsComponent,
    DoctorProfileSettingsComponent,
    DoctorBusinessSettingsComponent,
    DoctorClinicsSettingsComponent,
    DoctorEducationSettingsComponent,
    DoctorExperienceSettingsComponent,
    DoctorInsuranceSettingsComponent,
    DoctorAwardsSettingsComponent
  ],
  imports: [CommonModule, SettingsRoutingModule, SharedModule],
})
export class SettingsModule {}
