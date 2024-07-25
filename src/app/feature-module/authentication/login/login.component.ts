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
import { ToastrService } from 'ngx-toastr';
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
  submitClicked: boolean = false;

  phoneNumber: string = '';
  verificationCode: string = '';
  recaptchaVerifier: firebase.auth.RecaptchaVerifier | undefined;
  confirmationResult: firebase.auth.ConfirmationResult | undefined;

  constructor(private router: Router,private fb: FormBuilder,private authService:AuthService,public afAuth: AngularFireAuth,private toastr: ToastrService) {
    
  }

  ngOnInit(): void {
    firebase.initializeApp(environment.firebaseConfig)
    this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible'
    });
  }

  isNumber:boolean=false
  sendLoginCode() {
    this.submitClicked = true;
    if (this.phoneNumber) {
      this.afAuth.signInWithPhoneNumber('+91'+this.phoneNumber, this.recaptchaVerifier!)
      .then((confirmationResult) => {
        this.confirmationResult = confirmationResult;
        this.otpSent = true
        this.toastr.success('OTP sent Successfully', "Success");
        this.submitClicked = false;
      })
      .catch((error) => {
        this.toastr.error('Error during signInWithPhoneNumber');
        console.error('Error during signInWithPhoneNumber', error);
      });
    }
   
  }

  verifyLoginCode() {
    if (!this.confirmationResult) {
      console.error('Confirmation result is not set');
      return;
    }
    if (!this.verificationCode || this.verificationCode.length !== 6) {
      this.toastr.error('Invalid verification code');
      return;
    }
const sendData={
  mobileNo:this.phoneNumber
}
    this.confirmationResult.confirm(this.verificationCode)
      .then((result) => {
        this.authService.login(sendData).subscribe((res:any)=>{
                this.authService.setToken(res?.data.token);
                this.toastr.success(res.message);
                this.router.navigate(['/patients/patient-dashboard']);
              },
              err=>{
                this.toastr.error(err.message);
              }
            )
      })
      .catch((error) => {
        console.error('Error while verifying the code', error);
        this.toastr.error('Error while verifying the code');
      });
  }
  

}
