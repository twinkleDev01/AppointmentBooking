import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private razorpayKey = 'rzp_test_gFC2jjp7SLGBxp';

  constructor() { }

  initiatePayment(amount: number, name: string, email: string, contact: string) {
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
      handler: this.paymentHandler.bind(this)
    };
  
    console.log('Initiating payment with options:', options);
  
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  }
  

  paymentHandler(response: any) {
    console.log(response);
    // Handle the response after successful payment
    alert('Payment successful');
  }
}
