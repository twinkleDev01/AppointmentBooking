import { AfterViewChecked, Component, ViewEncapsulation } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';
import { LightGallery } from 'lightgallery/lightgallery';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-home10',
  templateUrl: './home10.component.html',
  styleUrls: ['./home10.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Home10Component implements AfterViewChecked {
  public routes = routes;
  public isClassAdded: boolean[] = [false];
  public doctorSliderOptions: OwlOptions = {
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
      575: {
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
  public pharmacySliderOptions: OwlOptions = {
    loop: true,
    margin: 10,
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
  public frequentSliderOptions: OwlOptions = {
    loop: true,
    margin: 24,
    dots: true,
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
        items: 3,
      },
      1200: {
        items: 3,
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
    horizontalSwiping: true,
  };
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }

  settings = {
    counter: false,
    plugins: [lgZoom, lgVideo],
  };
  private lightGallery!: LightGallery;
  private needRefresh = false;
  ngAfterViewChecked(): void {
    if (this.needRefresh) {
      this.lightGallery.refresh();
      this.needRefresh = false;
    }
  }
  onInit = (detail: { instance: LightGallery }): void => {
    this.lightGallery = detail.instance;
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
}
