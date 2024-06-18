import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-form-vertical',
  templateUrl: './form-vertical.component.html',
  styleUrls: ['./form-vertical.component.scss']
})
export class FormVerticalComponent {
  public routes = routes;
}
