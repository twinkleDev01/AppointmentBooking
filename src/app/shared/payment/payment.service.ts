/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { LoaderServiceService } from '../loader/loader-service.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private razorpayKey = 'rzp_test_gFC2jjp7SLGBxp';
  baseUrl: string = environment.baseurl;
  bookappointment:string='/Appointment/book_appointment'
  getZoomtoken: string='/Zoom/token'
  createmetting:string='/Zoom/createMeeting'
  public paymentId:BehaviorSubject<any> = new BehaviorSubject<any>({});

  constructor(private http:HttpClient, private auth:AuthService, private route:Router,private toastr: ToastrService,private loaderServiceService:LoaderServiceService) { }

  initiatePayment(amount: number, name: string, email: string, contact: string, formData: any,zoomData:any) {
    this.loaderServiceService.show();
    const options = {
      key: this.razorpayKey,
      amount: amount * 200,
      currency: "INR",
      name: "Your Company Name",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      prefill: {
        name: name,
        email: email,
        contact: contact
      },
      notes: {
        address: "Some address"
      },
      theme: {
        color: "#F37254"
      },
      // handler: this.paymentHandler.bind(response, formData)
      handler: (response: any) => this.paymentHandler(response, formData,zoomData,email)
    };
  
    console.log('Initiating payment with options:', options);
  
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }
  

  paymentHandler(response: any, formData: FormData,zoomData:any,email:string) {
    
    console.log(response, formData);
    const paymentIdData = response.razorpay_payment_id
    // Append the payment ID to the form data
  formData.append('PaymentId', response.razorpay_payment_id);
  formData.append('PaymentStatus', 'true');  // Optionally add payment status
   // Ensure formData is updated correctly
    // Handle the response after successful payment
    if (response.razorpay_payment_id) {
      this.bookAppointment(formData).subscribe((response: any) => {
        console.log('Appointment booked successfully:', response);
        if (response) {
          console.log(response,'success');
          this.paymentId.next(paymentIdData)
          this.route.navigate(['/patients/patient-dashboard']);
          this.auth.setToken(response.data.token);
          this.toastr.success('Appointment created Successfully', "Success");
          this.getZoomToken(zoomData,email);
          this.loaderServiceService.hide();
        }
      }, (error: any) => {
        console.error('Error booking appointment:', error);
        this.loaderServiceService.hide();
      });
    } else {
      console.error('Payment was not successful:', response.error_message);
      this.loaderServiceService.hide();
      // Optionally handle unsuccessful payment scenario
      // For example, display an error message to the user
    }
  }

  bookAppointment(formData:any){
    const url = `${this.baseUrl}${this.bookappointment}`
return this.http.post(url, formData);
  }

  getZoomToken(zoomData:any,email:string){
 const url=this.baseUrl+this.getZoomtoken
this.http.get(url).subscribe((res:any)=>{
  console.log(res); 
    const accessToken = res.access_token;
    zoomData.accessToken = accessToken;
    console.log(zoomData);
    this.createMeeting(zoomData,email)
},((err:any)=>{
  this.loaderServiceService.hide();
  }))
  }

  createMeeting(dataToCreate:any,email:string){
    this.loaderServiceService.show();
const url = `${this.baseUrl}${this.createmetting}?patientEmail=${email}`
this.http.post(url, dataToCreate).subscribe((res:any)=>{
  console.log(res);
  this.loaderServiceService.hide();
},((err:any)=>{
this.loaderServiceService.hide();
}));

  }
}
