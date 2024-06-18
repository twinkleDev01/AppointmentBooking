import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-patient-register-step3',
  templateUrl: './patient-register-step3.component.html',
  styleUrls: ['./patient-register-step3.component.scss']
})
export class PatientRegisterStep3Component {
  public routes = routes;
  public cartValue = [0];
  public addPos(i: number): void {
    this.cartValue[i]++;
  }
  public reducePos(i: number): void {
    this.cartValue[i]--;
  }

}
