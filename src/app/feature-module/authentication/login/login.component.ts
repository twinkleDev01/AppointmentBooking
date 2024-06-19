/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { routes } from 'src/app/shared/routes/routes';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public routes = routes;
  loginForm!: FormGroup;
  formSubmitted: boolean = false;
  otpSent: boolean = false;


  phoneNumber: string = '';
  verificationCode: string = '';
  recaptchaVerifier: firebase.auth.RecaptchaVerifier | undefined;
  confirmationResult: firebase.auth.ConfirmationResult | undefined;

  constructor(private router: Router,private fb: FormBuilder,private authService:AuthService,public afAuth: AngularFireAuth) {}

  ngOnInit(): void {
    firebase.initializeApp(environment.firebaseConfig)
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible'
    });
  }


  sendLoginCode() {
    // if (!this.phoneNumber || !/^\+\d{1,15}$/.test(this.phoneNumber)) {
    //   console.error('Invalid phone number');
    //   return;
    // }

    this.afAuth.signInWithPhoneNumber('+91'+this.phoneNumber, this.recaptchaVerifier!)
      .then((confirmationResult) => {
        this.confirmationResult = confirmationResult;
        console.log('SMS sent');
        this.otpSent = true
      })
      .catch((error) => {
        console.error('Error during signInWithPhoneNumber', error);
      });
  }

  verifyLoginCode() {
    if (!this.confirmationResult) {
      console.error('Confirmation result is not set');
      return;
    }
    if (!this.verificationCode || this.verificationCode.length !== 6) {
      console.error('Invalid verification code');
      return;
    }
const sendData={
  mobileNo:this.phoneNumber
}
    this.confirmationResult.confirm(this.verificationCode)
      .then((result) => {
        console.log('User signed in successfully', result.user);
        // Handle successful login (e.g., navigate to home page)
        this.authService.login(sendData).subscribe((res:any)=>{
                console.log(res);
                this.authService.setToken(res?.data.token);
                this.router.navigate(['/patients/patient-dashboard']);
              })
      })
      .catch((error) => {
        console.error('Error while verifying the code', error);
        // Handle error (e.g., display error message)
      });
  }

}
