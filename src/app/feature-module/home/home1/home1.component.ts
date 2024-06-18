import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { aboutUs, doctorSliderOne, partnersSlider, specialitiesSliderOne } from 'src/app/shared/models/models';
import { Router } from '@angular/router';

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
  slots: any = [
    {
      "id": "9d5d2f30-66f1-4413-adba-1150f6dcaefb",
      "date": "2024-06-18T00:00:00",
      "startTime": "09:00:00",
      "endTime": "09:25:00",
      "doctorId": "ef8860b2-fe2f-42ea-abfb-13ed9f50005a",
      "isBooked": false,
      "bookedBy": "0"
    },
    {
      "id": "3864f31c-3f86-4029-a193-1d51f8aedd3f",
      "date": "2024-06-18T00:00:00",
      "startTime": "09:00:00",
      "endTime": "09:25:00",
      "doctorId": "fe579475-e27e-41a4-a681-40e308bbb090",
      "isBooked": false,
      "bookedBy": "0"
    },
    {
      "id": "0971da3e-5cca-45eb-b2a8-237abc4ea12c",
      "date": "2024-06-18T00:00:00",
      "startTime": "09:30:00",
      "endTime": "09:55:00",
      "doctorId": "ef8860b2-fe2f-42ea-abfb-13ed9f50005a",
      "isBooked": false,
      "bookedBy": "0"
    },
    {
      "id": "c0476b06-8cb7-4dd7-9875-28d8e0b97081",
      "date": "2024-06-18T00:00:00",
      "startTime": "09:00:00",
      "endTime": "09:25:00",
      "doctorId": "031f720f-ad66-4aba-b060-930c8b37f576",
      "isBooked": true,
      "bookedBy": "0"
    },
    {
      "id": "ed303022-56d9-4761-a8cf-3b58f24dbc8a",
      "date": "2024-06-18T00:00:00",
      "startTime": "09:00:00",
      "endTime": "09:25:00",
      "doctorId": "126ff295-e58e-4c50-b5dd-a6ef8f6a2212",
      "isBooked": false,
      "bookedBy": "0"
    },
    {
      "id": "4df98530-5a35-494a-a6e5-3f12e95989d5",
      "date": "2024-06-18T00:00:00",
      "startTime": "10:00:00",
      "endTime": "10:25:00",
      "doctorId": "126ff295-e58e-4c50-b5dd-a6ef8f6a2212",
      "isBooked": false,
      "bookedBy": "0"
    },
    {
      "id": "a9a508c9-8bdc-4e8a-a3e3-45c4cbc84775",
      "date": "2024-06-18T00:00:00",
      "startTime": "09:30:00",
      "endTime": "09:55:00",
      "doctorId": "fe579475-e27e-41a4-a681-40e308bbb090",
      "isBooked": false,
      "bookedBy": "0"
    },
    {
      "id": "bcd64f5c-e04c-4041-b2a1-58d6fd2ded1d",
      "date": "2024-06-18T00:00:00",
      "startTime": "09:30:00",
      "endTime": "09:55:00",
      "doctorId": "031f720f-ad66-4aba-b060-930c8b37f576",
      "isBooked": false,
      "bookedBy": "0"
    },
    {
      "id": "58665505-26e7-4972-90b1-6b32a27938b6",
      "date": "2024-06-18T00:00:00",
      "startTime": "11:00:00",
      "endTime": "10:25:00",
      "doctorId": "031f720f-ad66-4aba-b060-930c8b37f576",
      "isBooked": false,
      "bookedBy": "0"
    },
    {
      "id": "b1d6cb48-50fa-4549-9123-8043329df630",
      "date": "2024-06-18T00:00:00",
      "startTime": "10:00:00",
      "endTime": "10:25:00",
      "doctorId": "ef8860b2-fe2f-42ea-abfb-13ed9f50005a",
      "isBooked": false,
      "bookedBy": "0"
    },
    {
      "id": "a7eaf7f8-451e-494a-ba9f-883ad8b9b799",
      "date": "2024-06-18T00:00:00",
      "startTime": "10:00:00",
      "endTime": "10:25:00",
      "doctorId": "fe579475-e27e-41a4-a681-40e308bbb090",
      "isBooked": false,
      "bookedBy": "0"
    },
    {
      "id": "43677720-164c-46a6-bba9-a5ab9833e14b",
      "date": "2024-06-18T00:00:00",
      "startTime": "10:00:00",
      "endTime": "10:25:00",
      "doctorId": "031f720f-ad66-4aba-b060-930c8b37f576",
      "isBooked": false,
      "bookedBy": "0"
    },
    {
      "id": "2a0cdcbc-8daa-4450-a3b1-d82ee4404f70",
      "date": "2024-06-18T00:00:00",
      "startTime": "09:30:00",
      "endTime": "09:55:00",
      "doctorId": "126ff295-e58e-4c50-b5dd-a6ef8f6a2212",
      "isBooked": false,
      "bookedBy": "0"
    }
  ];
  uniqueTimeSlots: any[] = [];


  files: { name: string, url: string, type: string }[] = [];
  concerns: { issueID: string, issueName: string }[] = [
    {
      "issueID": "0867d68f-2e18-41b7-a4e8-0f64564d5089",
      "issueName": "Left Leg Fracture "
    },
    {
      "issueID": "de8dfa59-56b3-4c4d-9854-28d69777618f",
      "issueName": "Eyes Problem"
    },
    {
      "issueID": "ed8a29d9-8ccc-49cd-9d5d-bcae4a19481a",
      "issueName": "Back Pain 3"
    },
    {
      "issueID": "a0c1c183-5b0a-418c-ba54-ce5f2207e6e7",
      "issueName": "Chest Pain 2"
    },
    {
      "issueID": "dc74b909-3896-4fcb-a0d5-efb6ecab98d5",
      "issueName": "Right Arm Swellings"
    },
    {
      "issueID": "7791c71b-bb92-4374-b9c5-fed8e0efcdc7",
      "issueName": "Fever and Cough"
    }
  ]
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
  constructor(private data: DataService, private router: Router) {
    this.specialitiesSliderOne = this.data.specialitiesSliderOne;
    this.doctorSliderOne = this.data.doctorSliderOne;
    this.aboutUs = this.data.aboutUs;
    this.partnersSlider = this.data.partnersSlider;
    const today = new Date();
    const endDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
    this.bsRangeValue = [today, endDate];  // Initialize the date range
    this.date = new Date();
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
    this.generateUniqueTimeSlots();
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
  
    this.uniqueTimeSlots = Array.from(timeSlotsMap.values()).map(slot => {
      return { ...slot, startTime: convertTo12HourFormat(slot.startTime) };
    });
    console.log("unique time slots", this.uniqueTimeSlots);
  }

  onSelectTimeSlot(slot: any) {
    this.selectedTimeSlot = slot;
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  onFileChange(event: any) {
    this.files = [];
    for (let i = 0; i < event.target.files.length; i++) {
        const file = event.target.files[i];
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.files.push({
                name: file.name,
                type: file.type,
                url: e.target.result
            });
        };
        reader.readAsDataURL(file);
    }
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


}
