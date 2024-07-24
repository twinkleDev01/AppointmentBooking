import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { routes } from 'src/app/shared/routes/routes';
import { environment } from 'src/environments/environment';
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
  Detail:any;
  baseUrl: string = environment.ImgBaseUrl
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
      const formData = new FormData();

    // Append each form field to the FormData instance
    formData.append('Image', this.profileForm.get('profileImage')?.value);
    formData.append('PatientId',this.Detail?.nameid);
    formData.append('Name', this.profileForm.get('firstName')?.value + ' ' + this.profileForm.get('lastName')?.value);
    formData.append('FirstName', this.profileForm.get('firstName')?.value);
    formData.append('LastName', this.profileForm.get('lastName')?.value);
    formData.append('DateOfBirth', this.dateOfBirth);
    formData.append('PhoneNumber', this.profileForm.get('phoneNumber')?.value);
    formData.append('Email', this.profileForm.get('email')?.value);
    formData.append('BloodGroup', this.profileForm.get('bloodGroup')?.value);
    formData.append('Address', this.profileForm.get('address')?.value);
    formData.append('City', this.profileForm.get('city')?.value);
    formData.append('State', this.profileForm.get('state')?.value);
    formData.append('Country', this.profileForm.get('country')?.value);
    formData.append('PinCode', this.profileForm.get('pincode')?.value);
this.patientsService.updatePatientinfo(formData).subscribe((res:any)=>{
  
  if (res.isSuccess) {
    const data = res;
this.patientsService.userSubject.next(data);
    this.toastr.success(res.message);
  } else {
    this.toastr.error('Failed to update patient details.');
  } 
})

    } 
  }
  selectedImageUrl: string | ArrayBuffer | null = null;
  onFileChange(event: any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const fileType = file.type;
    const validImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];

       // Read the file and set the URL to display
      //  const reader = new FileReader();
      //  reader.onload = () => {
      //    this.selectedImageUrl = reader.result;
      //  };
      //  reader.readAsDataURL(file);
      // this.profileForm.patchValue({
      //   profileImage: file
      // });
      if (validImageTypes.includes(fileType)) {
        // Read the file and set the URL to display
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedImageUrl = reader.result;
        };
        reader.readAsDataURL(file);
  
        this.profileForm.patchValue({
          profileImage: file
        });
      } else {
        // Display an error message or handle invalid file type
        // alert('Please upload a valid image file (jpg, jpeg, png).');
        this.toastr.error("Please upload a valid image file (jpg, jpeg, png).")
      }
    }
    else{
      this.profileForm.patchValue({
        profileImage: null
      });
    }
  }

  getUserInfo(){
    this.patientsService.getPatientinfo().subscribe((res:any)=>{
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
        });
        this.selectedImageUrl=this.generateImageUrl(res.data.image)
      }
    })
  }
  generateImageUrl(imageId:any) {
    return `${this.baseUrl}${imageId}`;
  }
  dateOfBirth: any
  onDateChange(event: any) {
    const date = new Date(event);
    if (isNaN(date.getTime())) {
      return;
    }
    const formattedDate = this.formatDate(date);
    this.profileForm.get('dateOfBirth')?.setValue(formattedDate, { emitEvent: false });
    this.dateOfBirth = formattedDate
  }

  formatDate(date: Date): string {
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
  }

  removeFile(){
    this.selectedImageUrl = '';
    this.profileForm.get('profileImage')?.setValue(null)
    this.patientsService.userSubject.next('')
  }

  validateNumber(event: KeyboardEvent) {
    const input = String.fromCharCode(event.keyCode);
    if (!/^[0-9]*$/.test(input)) {
      event.preventDefault();
    }
  }

  preventWhitespace(event: any): void {
    if (event.key === ' ') {
      event.preventDefault();
    }
  }
}
