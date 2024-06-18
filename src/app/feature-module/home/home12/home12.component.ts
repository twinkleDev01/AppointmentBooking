import { Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { swiperCarousel } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
import SwiperCore, {
  SwiperOptions,
  EffectCards,
  Mousewheel,
} from 'swiper';
SwiperCore.use([EffectCards, Mousewheel]);

interface data {
  value: string;
}

@Component({
  selector: 'app-home12',
  templateUrl: './home12.component.html',
  styleUrls: ['./home12.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Home12Component {
  public activeTab: Array<string> = [''];
  public routes = routes;
  public popularTestSlider: OwlOptions = {
    loop: false,
    margin: 15,
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
  public doctorConsultingSlider: OwlOptions = {
    loop: false,
    margin: 15,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fa-solid fa-play"></i>',
      '<i class="fa-solid fa-play"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      1200: {
        items: 1,
      },
    },
  };
  public bestPackageSlider: OwlOptions = {
    loop: false,
    margin: 15,
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
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  public featurePackageSlider: OwlOptions = {
    loop: false,
    margin: 15,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fa-solid fa-play"></i>',
      '<i class="fa-solid fa-play"></i>',
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
        items: 3,
      },
    },
  };
  public bookingLabTestSlider: OwlOptions = {
    loop: false,
    margin: 15,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fa-solid fa-play"></i>',
      '<i class="fa-solid fa-play"></i>',
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
        items: 3,
      },
    },
  };
  public popularChoiceSlider: OwlOptions = {
    loop: false,
    margin: 15,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fa-solid fa-play"></i>',
      '<i class="fa-solid fa-play"></i>',
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
  public variousLogoSlider: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 6,
      },
      1200: {
        items: 6,
      },
    },
  };
  public slideConfig = {
    dots: true,
    arrows: true,
    autoplay: false,
    centerMode: true,
    infinite: true,
    rows: 0,
    slidesToShow: 3,
    vertical: true,
    verticalSwiping: true,
  };
  public swiperSlider: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: false,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 6,
      },
    },
  };

  public selectedValue1 = '';
  public selectedValue2 = '';

  selectedList1: data[] = [
    { value: 'Select Speciality' },
    { value: 'Cardiology' },
    { value: 'Neurology' },
    { value: 'Urology' },
  ];
  selectedList2: data[] = [
    { value: 'Choose City' },
    { value: 'UK' },
    { value: 'USA' },
  ];

  config: SwiperOptions = {
    effect: 'cards',
    loop: false,
    grabCursor: true,
    slidesPerView: 'auto',
    initialSlide: 2,
    mousewheel: {
      invert: false,
    },
  };
  

  public swiperCarousel: swiperCarousel[] = [];
  constructor(private data: DataService) {
    this.swiperCarousel = this.data.swiperCarousel;
  }
}
