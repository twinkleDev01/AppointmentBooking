import {  Component,  Renderer2, ViewChild, } from '@angular/core';
import { CarouselComponent, OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';


@Component({
  selector: 'app-home11',
  templateUrl: './home11.component.html',
  styleUrls: ['./home11.component.scss'],
})
export class Home11Component  {
  public routes = routes;
  
  
  constructor(private renderer: Renderer2) { }
  public discoverSliderOptions: OwlOptions = {
    loop: true,
			margin: 10,
			dots: true,
			nav: false,
			smartSpeed: 2000,
			responsive: {
				0: {
					items: 1
				},
				500: {
					items: 1
				},
				575: {
					items: 2
				},
				768: {
					items: 2
				},
				1000: {
					items: 5
				},
				1200: {
					items: 5
				}
			}
  };
  public treatmentSliderOptions: OwlOptions = {
    loop: true,
    margin: 10,
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
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  };
  public featuresSliderOptions: OwlOptions = {
    loop: true,
    margin: 24,
    dots: true,
    nav: false,
    smartSpeed: 2000,
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
        items: 3
      },
      1200: {
        items: 3
      }
    }
  };
  public sliderSixteenOptions: OwlOptions = {
    margin: 0,
		center: true,
		loop: true,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1,
				margin: 15,
			},
			1000: {
				items: 3,
			}
		}
  };
  public eyeTestiSliderOptions: OwlOptions = {
    loop:true,
    margin:15,
    dots: true,
    nav:false,
    smartSpeed: 2000,
    navText: [ '<i class="fa-solid fa-arrow-left"></i>', '<i class="fa-solid fa-arrow-right"></i>' ], 
    responsive:{
      0:{
        items:1
      },
      1300:{
        items:1
      }
    }
  };
  public bannersliderssurgery: OwlOptions = {
    loop: true,
    margin: 0,
    dots: false,
    nav: false,
    autoplay:true,
    items: 4.5,
    smartSpeed: 500,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 1
      },
      575: {
        items: 2
      },
      768: {
        items: 3
      },
      1000: {
        items: 4
      },
      1300: {
        items: 4.5
      }
    },
    
  };
  // onCarouselChange(event: any) {
    
  //   this.brandSliderClasses();
  // }
  carouselImages = [
    { src: 'assets/img/cosmetic-banner-img3.png' },
    { src: 'assets/img/cosmetic-banner-img1.png' },
    { src: 'assets/img/cosmetic-banner-img2.png' },
    { src: 'assets/img/cosmetic-banner-img.png' },
    { src: 'assets/img/cosmetic-banner-img4.png' },
   
    
   
  ];
  // brandSliderClasses() {
  //   const brandSlider = document.querySelector('.banner-sliderssurgery');
  //   if (brandSlider) {
  //     const activeItems = brandSlider.querySelectorAll('.owl-item.active');
  //     activeItems.forEach((item, index) => {
  //       if (index === 2) {
  //         item.classList.add('activeset');
  //       } else {
  //         item.classList.remove('activeset');
  //       }
  //     });
  //   }
  // }
  onCarouselTranslated(event: any) {
    this.brandSliderClasses();
  }
  brandSliderClasses() {
    const brandSlider = document.querySelector('.banner-sliderssurgery');
    if (brandSlider) {
      const activeItems = brandSlider.querySelectorAll('.owl-item.active');
      activeItems.forEach((item, index) => {
        if (index === 2) {
          item.classList.add('activeset');
        } else {
          item.classList.remove('activeset');
        }
      });
    }
  }
}
