import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public routes = routes;
  constructor(private router: Router) {}

  public navigation() {
    this.router.navigate([routes.pharmacyDashboard]);
    localStorage.setItem('authenticated-pharmacy', 'true');
  }
  ngOnInit(): void {
    if (
      localStorage.getItem('authenticated-admin') ||
      localStorage.getItem('authenticated-pharmacy')
    ) {
      localStorage.removeItem('authenticated-admin');
      localStorage.removeItem('authenticated-pharmacy');
    }
  }
}
