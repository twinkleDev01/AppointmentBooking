/* eslint-disable @typescript-eslint/no-explicit-any */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private razorpayKey = 'rzp_test_gFC2jjp7SLGBxp';
  baseUrl: string = environment.baseurl;
  bookappointment:string='/Appointment/book_appointment'

  constructor(private http:HttpClient, private auth:AuthService, private route:Router) { }

  initiatePayment(amount: number, name: string, email: string, contact: string, formData: any) {
    const options = {
      key: this.razorpayKey,
      amount: amount * 100,
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
      handler: (response: any) => this.paymentHandler(response, formData)
    };
  
    console.log('Initiating payment with options:', options);
  
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }
  

  paymentHandler(response: any, formData: FormData) {
    console.log(response, formData);
    // Append the payment ID to the form data
  formData.append('PaymentId', response.razorpay_payment_id);
  formData.append('PaymentStatus', 'Success');  // Optionally add payment status
   // Ensure formData is updated correctly
    // Handle the response after successful payment
    alert('Payment successful');
    this.bookAppointment(formData).subscribe((response: any) => {
      console.log('Appointment booked successfully:', response);
     if(response){
      this.auth.setToken(response.data.token)
      this.route.navigate(['/patients/patient-dashboard']);
     }
    }, (error: any) => {
      console.error('Error booking appointment:', error);
    });
  }

  bookAppointment(formData:any){
    const url = `${this.baseUrl}${this.bookappointment}`
return this.http.post(url, formData);
  }
}
