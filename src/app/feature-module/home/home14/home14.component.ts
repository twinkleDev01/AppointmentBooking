import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-home14',
  templateUrl: './home14.component.html',
  styleUrl: './home14.component.scss'
})
export class Home14Component {
  public routes = routes
  public partnersSliderOption: OwlOptions = {
    loop: true,
    margin: 24,
    nav: false,
    dots:false,
    autoplay: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1
      },

      550: {
        items: 1
      },
      700: {
        items: 6
      },
      1000: {
        items: 6
      }
    }
  };
  public treatmentSliderOption: OwlOptions = {
    loop: true,
			margin: 24,
			nav: true,
			dots: false,
			autoplay: true,
			smartSpeed: 2000,
      navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
      responsive: {
				0: {
					items: 1
				},

				550: {
					items: 1
				},
				700: {
					items: 2
				},
				1000: {
					items: 2
				},
				1300: {
					items: 4
				}
			}
  };
  public expertSliderOption: OwlOptions = {
    loop: true,
			margin: 24,
			nav: true,
			dots: false,
			autoplay: true,
			smartSpeed: 2000,
      navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ], 
      responsive: {
				0: {
					items: 1
				},

				550: {
					items: 1
				},
				700: {
					items: 2
				},
				1000: {
					items: 4
				},
				1300: {
					items: 4
				}
			}
  };
  public customerSliderOption: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
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
      992: {
        items: 3
      },
      1200: {
        items: 3
      }
    }
  };
  public recentBlogOption: OwlOptions = {
    loop: true,
			margin: 24,
			dots: false,
			nav: true,
			smartSpeed: 2000,			
			navText: ['<i class="fa-solid fa-chevron-left "></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 1,
      },
    },
  };
}
