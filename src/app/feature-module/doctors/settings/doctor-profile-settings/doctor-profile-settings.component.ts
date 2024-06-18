import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
export interface Fruit {
  name: string;
}
interface medical {
  value?: string;
}

@Component({
  selector: 'app-doctor-profile-settings',
  templateUrl: './doctor-profile-settings.component.html',
  styleUrl: './doctor-profile-settings.component.scss',
})
export class DoctorProfileSettingsComponent {
  public routes = routes;

  public education = [0];
  public experience = [0];
  public awards = [0];
  public memberships = [0];
  public registrations = [0];

  addEducationFunc() {
    this.education.push(1);
  }
  dltEducationFunc(index: number) {
    this.education.splice(index, 1);
  }

  addExperienceFunc() {
    this.experience.push(1);
  }
  dltExperienceFunc(index: number) {
    this.experience.splice(index, 1);
  }

  addAwardsFunc() {
    this.awards.push(1);
  }
  dltAwardsFunc(index: number) {
    this.awards.push(index, 1);
  }

  addMembershipsFunc() {
    this.memberships.push(1);
  }
  dltMembershipsFunc(index: number) {
    this.memberships.splice(index, 1);
  }

  addRegistrationsFunc() {
    this.registrations.push(1);
  }
  dltRegistrationsFunc(index: number) {
    this.registrations.splice(index, 1);
  }

  values1: string[] = ['English', 'German', 'portugese'];
  values2: string[] = ['Hemoglobin A1c (HbA1c)', 'Liver Function Tests (LFTs)'];
  values3: string[] = ['Fever', 'Headache', 'Stomach Pain'];

  medical: medical[] = [{}];

  addMedical() {
    this.medical.push({});
  }

  dltMedical(index: number) {
    this.medical.splice(index, 1);
  }
}
