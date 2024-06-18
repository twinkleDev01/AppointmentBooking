import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-pharmacyfooter',
  templateUrl: './pharmacyfooter.component.html',
  styleUrls: ['./pharmacyfooter.component.scss']
})
export class PharmacyfooterComponent {
  public routes = routes

}
