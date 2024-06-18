import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

interface MedicalData {
  id: number;
}
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
  public routes = routes;

  medical: Array<MedicalData> = [];

  addMedical() {
    const newRecord: MedicalData = {
      id: 1,
    };
    this.medical.push(newRecord);
  }
}
