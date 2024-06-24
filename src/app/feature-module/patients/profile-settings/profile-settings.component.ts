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

  constructor(private fb: FormBuilder,private patientsService:PatientsService) {}
  ngOnInit() {

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
    } else {
      console.log('Form is not valid');
    }
  }
  
  onFileChange(event: any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.profileForm.patchValue({
        profileImage: file
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
