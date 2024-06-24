import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit {
  public routes = routes;
  date = new Date();
  myDateValue!: Date ;
  profileForm!: FormGroup;
  Detail:any
  constructor(private fb: FormBuilder,private patientsService:PatientsService) {
    this.Detail = localStorage.getItem('UserDetail')
        this.Detail = JSON.parse(this.Detail);
  }
  ngOnInit() {
console.log('a')
    this.myDateValue = new Date();
    this.profileForm = this.fb.group({
      profileImage: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: [''],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bloodGroup: [''],
      address: [''],
      city: [''],
      state: [''],
      country: [''],
      pincode: [''],
    });
    this.getUserInfo()
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  onSubmit(){
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      const formData = new FormData();

    // Append each form field to the FormData instance
    // formData.append('profileImage', this.profileForm.get('profileImage')?.value);
    formData.append('PatientId',this.Detail?.nameid);
    formData.append('profileImage', 'profileImage.png');
    formData.append('firstName', this.profileForm.get('firstName')?.value);
    formData.append('lastName', this.profileForm.get('lastName')?.value);
    formData.append('dateOfBirth', this.profileForm.get('dateOfBirth')?.value);
    formData.append('phoneNumber', this.profileForm.get('phoneNumber')?.value);
    formData.append('email', this.profileForm.get('email')?.value);
    formData.append('bloodGroup', this.profileForm.get('bloodGroup')?.value);
    formData.append('address', this.profileForm.get('address')?.value);
    formData.append('city', this.profileForm.get('city')?.value);
    formData.append('state', this.profileForm.get('state')?.value);
    formData.append('country', this.profileForm.get('country')?.value);
    formData.append('pincode', this.profileForm.get('pincode')?.value);
console.log(formData);
this.patientsService.updatePatientinfo(formData).subscribe((res)=>{
  console.log(res)
})

    } else {
      console.log('Form is not valid');
    }
  }
  
  onFileChange(event: any){
    console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.patchValue({
        profileImage: file
      });
    }
    else{
      console.log('No file selected');
      this.profileForm.patchValue({
        profileImage: null
      });
    }
  }

  getUserInfo(){
    this.patientsService.getPatientinfo().subscribe((res:any)=>{
      console.log(res,"49");
      // this.userInfo=res?.data;
      if (res.data) {
        this.profileForm.patchValue({
          profileImage: res.data.profileImage,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          dateOfBirth: res.data.dateOfBirth,
          phoneNumber: res.data.phoneNumber,
          email: res.data.email,
          bloodGroup: res.data.bloodGroup,
          address: res.data.address,
          city: res.data.city,
          state: res.data.state,
          country: res.data.country,
          pincode: res.data.pincode
        });
      }
    })
  }
}
