import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-payment',
  templateUrl: './doctor-payment.component.html',
  styleUrl: './doctor-payment.component.scss'
})
export class DoctorPaymentComponent {
  activeBox: number = 2;
  toggleActive(boxNumber: number): void {
    this.activeBox = boxNumber; 
  }
}
