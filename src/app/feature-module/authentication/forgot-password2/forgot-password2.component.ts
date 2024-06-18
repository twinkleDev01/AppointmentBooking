import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-forgot-password2',
  templateUrl: './forgot-password2.component.html',
  styleUrls: ['./forgot-password2.component.scss']
})
export class ForgotPassword2Component {
  public routes = routes;
  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([routes.loginEmail]);
  }
}
