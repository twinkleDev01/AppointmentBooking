/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public routes = routes;
  loginForm!: FormGroup;
  formSubmitted: boolean = false;
  constructor(private router: Router,private fb: FormBuilder,private authService:AuthService) {}

  // public navigation() {
  //   // this.router.navigate([routes.home1]);
  // }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  Submit(): void {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      const loginDetail={
        email:this.loginForm.value.email,
        password:this.loginForm.value.password
      }
      this.authService.login(loginDetail).subscribe((res:any)=>{
        this.authService.setToken(res?.data.token);
        this.router.navigate(['/patients/patient-dashboard']);
      })
      this.formSubmitted = false;
    }
  }
  get f() {
    return this.loginForm.controls;
  }

}
