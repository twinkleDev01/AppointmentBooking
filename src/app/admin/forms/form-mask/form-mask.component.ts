import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-form-mask',
  templateUrl: './form-mask.component.html',
  styleUrls: ['./form-mask.component.scss']
})
export class FormMaskComponent {
  public routes = routes;
}
