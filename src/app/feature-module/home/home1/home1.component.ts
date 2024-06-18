import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
import { aboutUs, doctorSliderOne, partnersSlider, specialitiesSliderOne } from 'src/app/shared/models/models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.scss'],
})
export class Home1Component implements OnInit {
  public routes = routes;
  date = new Date();
  public specialitiesSliderOne: specialitiesSliderOne[];
  public doctorSliderOne: doctorSliderOne[];
  public partnersSlider: partnersSlider[] = [];
  public aboutUs: aboutUs[];
  myDateValue!: Date ;

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
    this.myDateValue = new Date();
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }
}
