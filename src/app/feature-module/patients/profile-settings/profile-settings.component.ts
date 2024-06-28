import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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
  maxDate!: Date;
  Detail:any
  constructor(private fb: FormBuilder,private patientsService:PatientsService, private toastr:ToastrService) {
    this.maxDate = new Date();
    this.Detail = localStorage.getItem('UserDetail')
        this.Detail = JSON.parse(this.Detail);
    
  }
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

  onSubmit(){
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
      const formData = new FormData();

    // Append each form field to the FormData instance
    formData.append('Image', this.profileForm.get('profileImage')?.value);
    formData.append('PatientId',this.Detail?.nameid);
    formData.append('Name', this.profileForm.get('firstName')?.value + ' ' + this.profileForm.get('lastName')?.value);
    // formData.append('Image', 'profileImage.png');
    formData.append('FirstName', this.profileForm.get('firstName')?.value);
    formData.append('LastName', this.profileForm.get('lastName')?.value);
    // formData.append('DateOfBirth', this.profileForm.get('dateOfBirth')?.value);
    formData.append('DateOfBirth', this.dateOfBirth);
    formData.append('PhoneNumber', this.profileForm.get('phoneNumber')?.value);
    formData.append('Email', this.profileForm.get('email')?.value);
    formData.append('BloodGroup', this.profileForm.get('bloodGroup')?.value);
    formData.append('Address', this.profileForm.get('address')?.value);
    formData.append('City', this.profileForm.get('city')?.value);
    formData.append('State', this.profileForm.get('state')?.value);
    formData.append('Country', this.profileForm.get('country')?.value);
    formData.append('PinCode', this.profileForm.get('pincode')?.value);
console.log(formData);
this.patientsService.updatePatientinfo(formData).subscribe((res:any)=>{
  console.log(res)
  if (res.isSuccess) {
    this.toastr.success(res.message, "Success");
  } else {
    this.toastr.error('Failed to update patient details.');
  } 
})

    } else {
      console.log('Form is not valid');
    }
  }
  selectedImageUrl: string | ArrayBuffer | null = null;
  onFileChange(event: any){
    console.log(event,"75");
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
       // Read the file and set the URL to display
       const reader = new FileReader();
       reader.onload = () => {
         this.selectedImageUrl = reader.result;
         console.log(this.selectedImageUrl,"83")
       };
       reader.readAsDataURL(file);
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
        const dateOfBirth = new Date(res.data.dateOfBirth);
        this.profileForm.patchValue({
          profileImage: res.data.profileImage,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          dateOfBirth: dateOfBirth,
          phoneNumber: res.data.phoneNumber,
          email: res.data.email,
          bloodGroup: res.data.bloodGroup,
          address: res.data.address,
          city: res.data.city,
          state: res.data.state,
          country: res.data.country,
          pincode: res.data.pinCode,
          selectedImageUrl:res.data.image,
        });
      }
    })
  }
  dateOfBirth: any
  onDateChange(event: any) {
    const date = new Date(event);
    if (isNaN(date.getTime())) {
      console.error('Invalid date:', event);
      return;
    }
    const formattedDate = this.formatDate(date);
    this.profileForm.get('dateOfBirth')?.setValue(formattedDate, { emitEvent: false });
    this.dateOfBirth = formattedDate
    console.log('Formatted date:', formattedDate); // For debugging
  }

  formatDate(date: Date): string {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
  }
}
