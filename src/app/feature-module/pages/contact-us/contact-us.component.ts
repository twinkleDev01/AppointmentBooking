import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  public routes = routes;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private patientsService:PatientsService, private toastr:ToastrService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contactNumber: ['', Validators.required],
      service: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get services() {
    return this.contactForm.get('services');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit() {
    if (this.contactForm.valid) {
this.patientsService.contactData(this.contactForm.value).subscribe((res:any)=>{
  if(res){
    this.toastr.success(res.message);
  }
})
      console.log(this.contactForm.value);
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched(this.contactForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      } else {
        control?.markAsTouched();
      }
    });
  }

}
