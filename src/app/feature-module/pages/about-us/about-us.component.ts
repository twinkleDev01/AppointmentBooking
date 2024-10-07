import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { aboutUs } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  public routes = routes;
  public aboutUs: aboutUs[];
  Doctors:any;
  baseUrl: string = environment.ImgBaseUrl
  public doctorSlider: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500, 
    autoplayHoverPause: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  };

  public slideConfig = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 2000,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  faqs=[
    {
      'ques':'What is an online skin clinic?',
      'description': 'An online skin clinic provides virtual consultations with licensed dermatologists to diagnose and treat skin conditions through a secure platform.'
    },
    {
      'ques':' How does the online consultation process work?',
      'description': 'You can book an appointment through our website, complete a health questionnaire, upload photos of your skin concerns, and then have a video consultation with a dermatologist.'
    },
    {
      'ques':'What types of skin conditions do you treat?',
      'description': 'We treat a variety of conditions, including acne, eczema, psoriasis, rosacea, skin infections, hair loss and more.'
    },
    {
      'ques':'How do I schedule an appointment?',
      'description': 'You can schedule an appointment through our website’s booking system. Choose a date and time that works for you.'
    },
    {
      'ques':'What do I need for my consultation?',
      'description': 'Ensure you have a stable internet connection, a device with a camera and microphone, and any relevant medical history or information about your skin concerns.'
    },
    {
      'ques':'What if I need to cancel or reschedule my appointment?',
      'description': 'You can cancel or reschedule your appointment through your account on our website 48 hours before your scheduled appointment.'
    },
    {
      'ques':'Will I receive a prescription after my consultation?',
      'description': 'If your dermatologist determines that medication is necessary, they will provide you with a prescription that can be sent to your preferred pharmacy.'
    },
    {
      'ques':'Can I book appointments for family members or dependents?',
      'description': 'Yes, in many cases, you can book appointments for family members or dependents. However, you may need to provide their personal information and consent to do so.'
    },
    {
      'ques':'Is my information secure?',
      'description': 'Yes, we take privacy seriously. Our platform uses encryption and follows strict HIPAA regulations to protect your personal information.'
    },
    {
      'ques':'Do you offer cosmetic dermatology services?',
      'description': 'Yes, we provide consultations for cosmetic procedures, including Botox, fillers, and skincare regimens.'
    },
    {
      'ques':'How can I contact customer support?',
      'description': 'You can reach our customer support team via email, phone, or through the contact form on our website.'
    },

  ]

  constructor(private data: DataService,private patientsService: PatientsService,) {
    this.aboutUs = this.data.aboutUs;
  }
  ngOnInit(): void {
    this.getDoctors();
  }
  getDoctors(){
    this.patientsService.getDoctors().subscribe((res:any)=>{
      this.Doctors=res.result.data
    })
  }
  generateImageUrl(imageId:any) {
    return `${this.baseUrl}${imageId}`;
  }
handleImageError(event: Event): void {
  const target = event.target as HTMLImageElement;
  target.src = 'https://images.prismic.io/skinify/ZqnVuR5LeNNTxoko_doload.jpg?auto=format,compress'; // Specify the path to your default image
}

}
