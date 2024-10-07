import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  public routes = routes;
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
}
