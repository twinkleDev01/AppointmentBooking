import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { aboutUs, doctorSliderOne, partnersSlider, specialitiesSliderOne } from 'src/app/shared/models/models';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  slots: any 
  uniqueTimeSlots: any[] = [];
  filteredAppointments: any;
  appointmentForm: FormGroup;
  files: { name: string, url: string, type: string }[] = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  concerns:any
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
  constructor(private data: DataService, private router: Router,private patientsService:PatientsService,private fb: FormBuilder) {
    this.specialitiesSliderOne = this.data.specialitiesSliderOne;
    this.doctorSliderOne = this.data.doctorSliderOne;
    this.aboutUs = this.data.aboutUs;
    this.partnersSlider = this.data.partnersSlider;
    const today = new Date();
    const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    this.bsRangeValue = [today, endDate];  // Initialize the date range
    this.date = new Date();
    this.appointmentForm = this.fb.group({
      age: ['', Validators.required],
      gender: ['', Validators.required],
      firstTimeConsult: ['', Validators.required],
      selectedSlot: ['', Validators.required],
      selectedConcerns: this.fb.array([]),
      selectedDate:['', Validators.required],
      selectedFiles: this.fb.array([])
    });
  }

  get concernControls() {
    return this.appointmentForm.get('concerns') as FormArray;
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
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 2
      },
      1000: {
        items: 6
      },
      1200: {
        items: 6
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
        items: 1
      },

      550: {
        items: 1
      },
      700: {
        items: 4
      },
      1000: {
        items: 6
      }
    }
  };
  public navigation() {
    this.router.navigate([routes.search2]);
  }
  ngOnInit() {

    this.getIssues();
    this.getAvailableSlots()
  }

onSelectDate(event: any) {
  const date = event?.target?.value;
  if (date) {
    console.log("Selected date:", date);
    this.selectedDate = date;
    // Log the current date
    console.log("Current date:", this.selectedDate);
    // Log the dates of all slots
    console.log("Slot dates:");
    for (const slot of this.slots) {
      console.log(slot.date);
    }
    // Filter time slots based on the selected date
    this.selectedSlots = this.slots.filter((slot: { startTime: string, date: string }) =>
      this.isSameDay(slot.date, this.selectedDate)
    );
    console.log("Selected slots:", this.selectedSlots);
  }
}


  isSameDay(slotDate: string, selectedDate: Date): boolean {
    const slotDateTime = new Date(slotDate).toDateString(); // Extract date part only
    const selectedDateTime = selectedDate.toDateString(); // Extract date part only
    return slotDateTime === selectedDateTime;
  }

  generateUniqueTimeSlots() {
    const timeSlotsMap = new Map();
    this.slots.forEach((slot: { startTime: any; }) => {
      if (!timeSlotsMap.has(slot.startTime)) {
        timeSlotsMap.set(slot.startTime, slot);
      }
    });
  
    // Convert time to 12-hour format
    const convertTo12HourFormat = (timeString: string) => {
      const [hours, minutes] = timeString.split(':').map(Number);
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const twelveHour = hours % 12 || 12;
      return `${twelveHour}:${minutes < 10 ? '0' : ''}${minutes}${ampm}`;
    };
  
    this.uniqueTimeSlots = Array.from(timeSlotsMap.values())?.map(slot => {
      return { ...slot, startTime: convertTo12HourFormat(slot.startTime) };
    });
    console.log("unique time slots", this.uniqueTimeSlots);
  }

  onSelectTimeSlot(slot: any) {
    this.selectedTimeSlot = slot;
  }

  
  onDateChange(event: any) {
    console.log("date change");
    this.selectedDate = event;
    console.log('Date changed:', this.selectedDate);
    this.filterAppointments(this.formatDate(this.selectedDate));
  }

  

  formatDate(date: Date): string {
    return `${date.getFullYear()}-${this.padZero(date.getMonth() + 1)}-${this.padZero(date.getDate())}T00:00:00`;
  }

  padZero(num: number): string {
    return num < 10 ? `0${num}` : `${num}`;
  }


  filterAppointments(date: any) {
    this.filteredAppointments = this.uniqueTimeSlots.filter(appointment => appointment.date === date);
    console.log('Filtered appointments:', this.filteredAppointments);
  
  }

  onFileChange(event: any): void {
    const fileInput = event.target.files;
    const filesArray = this.appointmentForm.get('selectedFiles') as FormArray;
    
    // Clear previous files
    filesArray.clear();
    this.files = [];

    Array.from(fileInput).forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const fileUrl = e.target.result;
        this.files.push({ name: file.name, url: fileUrl, type: file.type });
        filesArray.push(new FormControl({ name: file.name, url: fileUrl, type: file.type }));
      };
      reader.readAsDataURL(file);
    });
  }

onCheckboxChange(event: any, concernId: number) {
  const selectedConcerns = this.appointmentForm.get('selectedConcerns') as FormArray;

  if (event.target.checked) {
    selectedConcerns.push(new FormControl(concernId));
  } else {
    const index = selectedConcerns.controls.findIndex(x => x.value === concernId);
    selectedConcerns.removeAt(index);
  }
}

isConcernSelected(concernId: number): boolean {
  const selectedConcerns = this.appointmentForm.get('selectedConcerns') as FormArray;
  return selectedConcerns.controls.some(x => x.value === concernId);
}


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

getIssues(){
  this.patientsService.getIssues().subscribe(issues =>{
    console.log(issues);
    this.concerns=issues
  })
}

getAvailableSlots(){
  this.patientsService.getAvailableSlot().subscribe(availableSlots =>{
    console.log(availableSlots);
    this.slots=availableSlots;
    this.generateUniqueTimeSlots();
  })
}

onSubmit(){
  this.appointmentForm.patchValue({
    selectedSlot: this.selectedTimeSlot.startTime ,
    selectedDate: this.selectedDate
  });
  console.log(this.appointmentForm.value);
  if (this.appointmentForm.valid) {
    console.log(this.appointmentForm.value);
    // Handle form submission
  }
}
}
