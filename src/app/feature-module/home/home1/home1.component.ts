import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { aboutUs, doctorSliderOne, partnersSlider, specialitiesSliderOne } from 'src/app/shared/models/models';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/shared/payment/payment.service';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { environment } from 'src/environments/environment';

declare var $: any;

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss'],
})
export class Home1Component implements OnInit {
  public routes = routes;
  public specialitiesSliderOne: specialitiesSliderOne[];
  public doctorSliderOne: doctorSliderOne[];
  public partnersSlider: partnersSlider[] = [];
  public aboutUs: aboutUs[];
  myDateValue!: Date;
  isModalOpen = false;
  date!: Date;
  bsRangeValue!: Date[];
  selectedDate: Date = new Date();
  selectedSlots: any[] = [];
  selectedTimeSlot: any;
  isImageModalOpen: boolean = false;
  selectedImageUrl!: string;
  submitted:boolean = false;
  slots: any;
  uniqueTimeSlots: any[] = [];
  filteredAppointments: any;
  appointmentForm: FormGroup;
  activeIndex = 0;
  slotConfirmed: boolean=false;
  files: { name: string, url: string, type: string }[] = [];
  concerns: any;
  bookAppointmentbtn: boolean = false;
  userDetails: any
  InfoForm: FormGroup; isMobile!: boolean;
  issues:any
  userInfo:any
  isPatient:boolean = false;
  choosenIssues:any;
  existingUser:boolean = false;
  baseUrl: string = environment.ImgBaseUrl
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
  selectedValue!: any;
  minDate!: Date;
  Doctors:any;
  consultationFees:any
  constructor(
    private data: DataService,
    private router: Router,
    private patientsService: PatientsService,
    private fb: FormBuilder,
    private paymentService: PaymentService,
    private el: ElementRef,
    private toastr: ToastrService,
    private auth: AuthService
  ) {
    this.specialitiesSliderOne = this.data.specialitiesSliderOne;
    this.doctorSliderOne = this.data.doctorSliderOne;
    this.aboutUs = this.data.aboutUs;
    this.partnersSlider = this.data.partnersSlider;
    const today = new Date();
    const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    this.bsRangeValue = [today, endDate]; // Initialize the date range
    this.date = new Date();
    this.appointmentForm = this.fb.group({
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$"), this.noWhitespaceValidator]],
      gender: ['', Validators.required],
      description: ['', Validators.required],
      firstTimeConsult: ['true'],
      selectedFiles: this.fb.array([]),
    });
    this.selectedValue = 'true';
    this.InfoForm = this.fb.group({
      firstName: ['', [Validators.required, this.alphabeticValidator()]],
      lastName: ['', [Validators.required, this.alphabeticValidator()]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      pinCode: ['', Validators.required],
      email: ['', [Validators.required, this.emailValidator()]],
      phone: ['', [Validators.required, this.tenDigitNumberValidator()]]
    });
    
    this.isMobile = window.innerWidth <= 576;
    this.minDate = new Date();  // Set the minimum date to the current date (optional)
    this.auth.token.subscribe((res:any)=>{
      if(res){
        this.isPatient = true
      }
    })
    if(!localStorage.getItem('token')){
      this.isPatient = false
    }else{
      this.isPatient = true
    }
  }

  get isMobileResolution(){
return window.innerWidth < 767
  }

  ngOnInit() {
    this.getIssues();
    this.getAvailableSlots();
    this.checkScreenSize();
    const token = localStorage.getItem('token');
    if (token) {
      this.getUserInfo();
    }
    this.getDoctors();
    if(!localStorage.getItem('token')){
      this.isPatient = false
    }else{
      this.isPatient = true
    }
    this.patientsService.buttonState$.subscribe((state:boolean) => {
      this.bookAppointmentbtn = state;
    });
  }
  
  getDoctors(){
    this.patientsService.getDoctors().subscribe((res:any)=>{
      this.Doctors=res.result.data
    })
  }

  onCheckboxChanges(selectedIssues: any) {
    this.choosenIssues = selectedIssues
  }
  onRadioChange(value: string): void {
    this.selectedValue = value;
  }
  get concernControls() {
    return this.appointmentForm.get('selectedConcerns') as FormArray;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 576;
  }



  public specialitiesSlider: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
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
        items: 6,
      },
      1200: {
        items: 6,
      },
    },
  };

  public doctorSlider: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: false,
    smartSpeed: 2000,
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

  public partnersSliderOption: OwlOptions = {
    margin: 24,
    nav: true,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      550: {
        items: 1,
      },
      700: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  };

  onSelectDate(event: any) {
    const date = event?.target?.value;
    if (date) {
      this.selectedDate = date;
      for (const slot of this.slots) {
      }
      this.selectedSlots = this.slots.filter(
        (slot: { startTime: string; date: string }) =>
          this.isSameDay(slot.date, this.selectedDate)
      );
    }
  }

  isSameDay(slotDate: string, selectedDate: Date): boolean {
    const slotDateTime = new Date(slotDate).toDateString(); // Extract date part only
    const selectedDateTime = selectedDate.toDateString(); // Extract date part only
    return slotDateTime === selectedDateTime;
  }

  generateUniqueTimeSlots() {
    const timeSlotsMap = new Map();
    this.slots.forEach((slot: { startTime: any }) => {
      if (!timeSlotsMap.has(slot.startTime)) {
        timeSlotsMap.set(slot.startTime, slot);
      }
    });

    const convertTo12HourFormat = (timeString: string) => {
      const [hours, minutes] = timeString.split(':').map(Number);
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const twelveHour = hours % 12 || 12;
      return `${twelveHour}:${minutes < 10 ? '0' : ''}${minutes}${ampm}`;
    };

    this.uniqueTimeSlots = Array.from(timeSlotsMap.values())?.map((slot) => {
      return { ...slot, startVisibleTime: convertTo12HourFormat(slot.startTime) };
    });
  }

  tempSelectedTimeSlot:any
  onSelectTimeSlot(slot: any) {
    // this.selectedTimeSlot = slot;
    this.tempSelectedTimeSlot = slot; // Store the time slot temporarily
  }

  onDateChange(event: any) {
    this.selectedDate = event;
    this.filterAppointments(this.formatDate(this.selectedDate));
  }

  formatDate(date: Date): string {
    
    return `${date.getFullYear()}-${this.padZero(date.getMonth() + 1)}-${this.padZero(
      date.getDate()
    )}T00:00:00`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }

  filterAppointments(date: any) {
    this.filteredAppointments = this.slots.filter(
      (appointment:any) => appointment.date === date
    );
  }
  

  onFileChange(event: any): void {
    const fileInput = event.target.files;
    const filesArray = this.appointmentForm.get('selectedFiles') as FormArray;

    // Calculate remaining slots available
    const remainingSlots = 5 - this.files.length;

    // Restrict to maximum 5 files in total
    const filesToAdd = Math.min(fileInput.length, remainingSlots);

    for (let i = 0; i < filesToAdd; i++) {
      const file = fileInput[i];
      const fileType = file.type;
      if (fileType === 'image/jpeg' || fileType === 'image/png') {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const fileUrl = e.target.result;
        this.files.push({ name: file.name, url: fileUrl, type: file.type });
        filesArray.push(
          new FormControl(file)
        );
      };
      reader.readAsDataURL(file);
    }else{
      this.toastr.error('Invalid file type. Only JPG, JPEG, and PNG files are allowed.');
    }
    }
  }

  onCheckboxChange(event: any, concernId: number) {
    const selectedConcerns = this.appointmentForm.get(
      'selectedConcerns'
    ) as FormArray;

    if (event.target.checked) {
      selectedConcerns.push(new FormControl(concernId));
    } else {
      const index = selectedConcerns.controls.findIndex(
        (x) => x.value === concernId
      );
      selectedConcerns.removeAt(index);
    }
  }

  // isConcernSelected(concernId: number): boolean {
  //   const selectedConcerns = this.appointmentForm.get(
  //     'selectedConcerns'
  //   ) as FormArray;
  //   return selectedConcerns.controls.some((x) => x.value === concernId);
  // }

  openImageModal(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.isImageModalOpen = false;
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  getIssues() {
    this.patientsService.getIssues().subscribe((issues:any) => {
      this.concerns = issues.issues;
      this.consultationFees=issues.consultationFees
    });
  }

  getAvailableSlots() {
    this.patientsService.getAvailableSlot().subscribe((availableSlots) => {
      this.slots = availableSlots;
      this.generateUniqueTimeSlots();
      this.selectedDate = new Date();  // Initialize with the current date
      this.filterAppointments(this.formatDate(this.selectedDate));
    });
  }

  confirmSlot(): void {
    this.selectedTimeSlot = this.tempSelectedTimeSlot; // Confirm the time slot
    this.closeModal();
  }

  onSubmit(){
    this.submitted=true
    const user = localStorage.getItem('UserDetail');
    if (user) {
      this.userDetails = JSON.parse(user); // Directly parse the user object
    } 
    if (this.appointmentForm.valid && this.choosenIssues?.length > 0) {
      if(this.slotConfirmed===true){
    this.issues= this.appointmentForm.value.selectedConcerns;
    
      this.bookAppointmentbtn = true
      }
      
    }else{
      this.navigateToInvalidSection();
    }
  }

  navigateToInvalidSection() {
    // Scroll to the first invalid control if form is submitted
    const invalidControl = document.querySelector('.ng-invalid');
    if (invalidControl) {
      invalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.files.length) % this.files.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.files.length;
  }

  openImagePreviewModal() {
    if (this.files.length > 0) {
      this.isImageModalOpen = true;
    }
  }
  formatTime(inputTime :any) {
    const timeParts = inputTime.split(":");
    const hours = timeParts[0];
    const minutes = timeParts[1];
    return hours + ":" + minutes;
  }

  initiatePayment() {
    const isValid = this.InfoForm.valid;
    const token = localStorage.getItem('token');
    if (isValid || token) {
      
  
      const amount = 100;
      const name = this.InfoForm.value.firstName + ' ' + this.InfoForm.value.lastName;
      const email = this.InfoForm.value.email;
      const contact = this.InfoForm.value.phone;
      const data = {
        IssueIds: this.choosenIssues?.map((issue: { issueID: any }) => issue.issueID),
        AppointmentDate: this.formatDatetoSend(this.selectedDate),
        slotTime: this.formatTime(this.selectedTimeSlot?.startTime),
        IsCancelled: false,
        IsCompleted: false,
        Images: this.appointmentForm.value.selectedFiles,
        Descriptions: this.appointmentForm.value.description,
        'user.FirstName': this.InfoForm.value.firstName,
        'user.LastName': this.InfoForm.value.lastName,
        'user.City': this.InfoForm.value.city,
        'user.Pincode': this.InfoForm.value.pinCode,
        'user.State': this.InfoForm.value.state,
        'user.Gender': this.appointmentForm.value.gender,
        'user.Age': this.appointmentForm.value.age,
        'user.Phone': this.InfoForm.value.phone,
        'user.Email': this.InfoForm.value.email,
        'user.Country': this.InfoForm.value.country,
        'user.Address':this.InfoForm.value.address,
        Fees: `${this.consultationFees}.00`
      };
      const zoomData = {
        "accessToken": "",
        "topic": "Appointment",
        "type": 2,
        "start_time": `${this.formatDatetoSend(this.selectedDate)}T${this.selectedTimeSlot?.startTime}Z`,
        "duration": 30,
        "timezone": "UTC",
        "agenda": "Discuss health concerns",
        "settings": {
          "host_video": true,
          "participant_video": true,
          "join_before_host": false,
          "mute_upon_entry": false,
          "watermark": false,
          "approval_type": 2,
          "audio": "both",
          "auto_recording": "none"
        }
      };
  
      const formData = new FormData();
  
      // Populate formData with data fields
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => {
            formData.append(key, item);
          });
        } else {
          formData.append(key, value);
        }
      });
  
      this.paymentService.initiatePayment(amount, name, email, contact, formData, zoomData,this.consultationFees);
      this.paymentService.paymentId.subscribe((res: any) => {
        if (res && Object.keys(res).length !== 0) {
          this.InfoForm.reset();
        }
      });
  
    } else {
      this.markAllAsTouched();
    }
  }
  

  private markAllAsTouched() {
    Object.values(this.InfoForm.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  checkLengthage(event: Event, maxLength: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
      this.appointmentForm.controls['age'].setValue(input.value, { emitEvent: false });
    }
  }
  checkLength(event: Event, maxLength: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > maxLength) {
      input.value = input.value.slice(0, maxLength);
      this.InfoForm.controls['pinCode'].setValue(input.value, { emitEvent: false });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formatDatetoSend(dateString: any) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  }
  removePm(time: string): string {
    return time.replace('PM', '').trim();
  }

  backButton(){
    this.bookAppointmentbtn = false;
  }

  selectedConcerns:any;

  getUserInfo(){
    this.patientsService.getPatientinfo().subscribe((res:any)=>{
      this.userInfo=res?.data;
      this.existingUser=true
      this.InfoForm.patchValue({
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        phone: res.data.phoneNumber,
        email: res.data.email,
        city: res.data.city,
        state: res.data.state,
        pinCode: res.data.pinCode,
        address: res.data.address,
        country:res.data.country
      });
//       Object.keys(this.InfoForm.controls).forEach((control:any)=>{
// this.InfoForm?.get(control)?.disable();
//       })
      
    })
  }
  noWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
    };
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

  ngOnDestroy(){
this.paymentService.paymentId.unsubscribe();
this.InfoForm.reset();
  }

  generateImageUrl(imageId:any) {
    return `${this.baseUrl}${imageId}`;
  }
handleImageError(event: Event): void {
  const target = event.target as HTMLImageElement;
  target.src = '../../../../assets/img/dummy/doload.jpg'; // Specify the path to your default image
}

alphabeticValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^[a-zA-Z]*$/.test(control.value);
    return valid ? null : { 'alphabetic': { value: control.value } };
  };
}
emailValidator(): ValidatorFn {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = emailPattern.test(control.value);
    return valid ? null : { 'email': { value: control.value } };
  };
}
tenDigitNumberValidator(): ValidatorFn {
  const numberPattern = /^[0-9]{10}$/;
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = numberPattern.test(control.value);
    return valid ? null : { 'tenDigitNumber': { value: control.value } };
  };
}
deleteFile(file:any){
  const fileIndex = this.files.indexOf(file);
  if (fileIndex !== -1) {
    this.files.splice(fileIndex, 1);
    
  } 
  
}
}
