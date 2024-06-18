import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DatePipe } from '@angular/common';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-home6',
  templateUrl: './home6.component.html',
  styleUrls: ['./home6.component.scss'],
})
export class Home6Component implements OnInit {
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public activeTab: Array<string> = ['eyeglass'];
  showTimePicker: Array<string> = []
  date = new Date();
  myTime: Date = new Date();
  myDateValue!: Date ;
  

  public specialOptions: OwlOptions = {
    loop:true,
    margin:15,
    dots: true,
    nav:false,
    smartSpeed: 2000,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      500:{
        items:2
      },
      768:{
        items:3
      },
      1000:{
        items:4
      },
      1300:{
        items:4
      }
    }
  };
  public eyeClinicOptions: OwlOptions = {
    loop:true,
    margin:15,
    dots: true,
    nav:true,
    smartSpeed: 2000,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      768:{
        items:2
      },
      992:{
        items:4
      },
      1200:{
        items:4
      }
    }
  };
  public eyeBlogSliderOptions: OwlOptions = {
    loop:true,
    margin:15,
    dots: true,
    nav:false,
    smartSpeed: 2000,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      768:{
        items:2
      },
      1000:{
        items:4
      },
      1300:{
        items:4
      }
    }
  };
  public eyeTestiSliderOptions: OwlOptions = {
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: ['<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 1
      }
    }
  };
  public eyeGlassSlider1: OwlOptions = {
    loop:true,
    margin:15,
    dots: true,
    nav:false,
    smartSpeed: 2000,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      768:{
        items:2
      },
      1000:{
        items:4
      },
      1300:{
        items:4
      }
    }
  };
  public eyeGlassSlider2: OwlOptions = {
    loop:true,
    margin:15,
    dots: true,
    nav:false,
    smartSpeed: 2000,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      768:{
        items:2
      },
      1000:{
        items:4
      },
      1300:{
        items:4
      }
    }
  };
  public eyeGlassSlider3: OwlOptions = {
    loop:true,
    margin:15,
    dots: true,
    nav:false,
    smartSpeed: 2000,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      768:{
        items:2
      },
      1000:{
        items:4
      },
      1300:{
        items:4
      }
    }
  };
  public eyeGlassSlider4: OwlOptions = {
    loop:true,
    margin:15,
    dots: true,
    nav:false,
    smartSpeed: 2000,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      768:{
        items:2
      },
      1000:{
        items:4
      },
      1300:{
        items:4
      }
    }
  };
  public eyeGlassSlider5: OwlOptions = {
    loop:true,
    margin:15,
    dots: true,
    nav:false,
    smartSpeed: 2000,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      768:{
        items:2
      },
      1000:{
        items:4
      },
      1300:{
        items:4
      }
    }
  };
  public eyeGlassSlider6: OwlOptions = {
    loop:true,
    margin:15,
    dots: true,
    nav:false,
    smartSpeed: 2000,
    navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      500:{
        items:1
      },
      768:{
        items:2
      },
      1000:{
        items:4
      },
      1300:{
        items:4
      }
    }
  };
  selectedList1: data[] = [
    { value: 'Hospital' },
    { value: 'Online' },
    { value: 'Offline' },
  ];
  selectedList2: data[] = [
    { value: 'Doctor Name' },
    { value: 'George' },
    { value: 'Matthew' },
  ];
  selectedList3: data[] = [
    { value: 'Online Consultation' },
    { value: 'Online' },
    { value: 'Offline' },
  ];
  selectedList4: data[] = [
    { value: 'Appointment Type' },
    { value: 'Online' },
    { value: 'Offline' },
  ];
  constructor( private datePipe: DatePipe) { 
  }
  toggleTimePcker(value: string): void {

    if (this.showTimePicker[0] !== value) {
      this.showTimePicker[0] = value
    } else {
      this.showTimePicker = []
    }
  }
  formatTime(date: Date) {
    const selectedDate: Date = new Date(date)
    return this.datePipe.transform(selectedDate, 'h:mm a')
  }
  ngOnInit() {
    this.myDateValue = new Date();
  }
  onDateChange(newDate: Date) {
    console.log(newDate);
  }
}
