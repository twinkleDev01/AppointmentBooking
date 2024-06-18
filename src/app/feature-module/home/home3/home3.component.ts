import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss'],
})
export class Home3Component {
  public routes = routes;
  public selectedValue1 = '';
  selectedList1: data[] = [
    { value: 'Select Department' },
    { value: 'Cardiology' },
    { value: 'Neurology' },
    { value: 'Urology' },
  ];
  public clinicsSliderOption: OwlOptions = {
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      768: {
        items: 3
      },
      1000: {
        items: 6
      },
      1300: {
        items: 6
      }
    }
  };
  public ourDoctorsOption: OwlOptions = {
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-chevron-left custom-arrow"></i>', '<i class="fas fa-chevron-right custom-arrow"></i>'],
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
  public clinicFeatureOption: OwlOptions = {
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 5,
      },
    },
  };
  public blogsOption: OwlOptions = {
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: [
      '<i class="fas fa-chevron-left custom-arrow"></i>',
      '<i class="fas fa-chevron-right custom-arrow"></i>',
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
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };
}
