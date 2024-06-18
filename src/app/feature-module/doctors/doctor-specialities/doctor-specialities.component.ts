import { Component } from '@angular/core';
interface specialities {

}

@Component({
  selector: 'app-doctor-specialities',
  templateUrl: './doctor-specialities.component.html',
  styleUrl: './doctor-specialities.component.scss',
})
export class DoctorSpecialitiesComponent {
  cardiology: specialities[] = [{}];
  neurology: specialities[] = [{}];
  urology: specialities[] = [{}];
  speciality: Array<specialities> = []

  addCardiology() {
    this.cardiology.push({});
  }
  addNeurology() {
    this.neurology.push({});
  }
  addUrology() {
    this.urology.push({});
  }
  addSpeciality() {
    this.speciality.push(1)
  }

  dltCardiology(index: number) {
    this.cardiology.splice(index, 1);
  }
  dltNeurology(index: number) {
    this.neurology.splice(index, 1);
  }
  dltUrology(index: number) {
    this.urology.splice(index, 1);
  }
}
