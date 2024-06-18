import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-home8',
  templateUrl: './home8.component.html',
  styleUrls: ['./home8.component.scss'],
})
export class Home8Component implements OnInit {
  public routes = routes;
  sticky = false;
  public white_bg = false;
  date = new Date();
  myDateValue!: Date ;
  ngOnInit() {
    this.myDateValue = new Date();
  }
  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
    { value: 'Choose any Service' },
    { value: 'Blood Tests' },
    { value: 'Diagnostic Tests' },
  ];
  selectedList2: data[] = [
    { value: 'Paediatrician' },
    { value: 'Obstetric' },
  ];
  public ourSliderOptions: OwlOptions = {
    loop: true,
    margin: 64,
    dots: true,
    nav: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 2,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };
  public clientSaysOptions: OwlOptions = {
    loop: true,
    margin: 24,
    dots: true,
    nav: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      575: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  };
  public teamSliderOptions: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fa-solid fa-caret-left "></i>',
      '<i class="fa-solid fa-caret-right"></i>',
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
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };
  constructor(private router: Router) {}
  public navigation() {
    this.router.navigate([routes.search2]);
  }
 
  elementPosition = 0;
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
    if (windowScroll == 0) {
      this.white_bg = false;
    } else {
      this.white_bg = true;
    }
  }
}
