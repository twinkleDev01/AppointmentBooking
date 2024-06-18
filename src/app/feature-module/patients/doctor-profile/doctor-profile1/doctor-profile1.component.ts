import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-profile1',
  templateUrl: './doctor-profile1.component.html',
  styleUrl: './doctor-profile1.component.scss'
})
export class DoctorProfile1Component {
  public routes = routes
  public ourDoctorOption: OwlOptions = {
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
        items: 6,
      },
      1300: {
        items: 1,
      },
    },
  };
  public availabilyOption: OwlOptions = {
    loop: false,
			margin: 24,
			dots: false,
			nav: true,
			smartSpeed: 2000,		
			navText: ['<i class="fa-solid fa-chevron-left "></i>', '<i class="fa-solid fa-chevron-right"></i>'],
      responsive: {
				0: {
					items: 2
				},
				768: {
					items: 3
				},
				1000: {
					items: 5
				},
				1300: {
					items: 6
				},
				1400: {
					items: 7
				}
			}
  };
  public awardOption: OwlOptions = {
    loop: false,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,	
    
			navText: ['<i class="fa-solid fa-chevron-left "></i>', '<i class="fa-solid fa-chevron-right"></i>'],
      responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				1000: {
					items: 4
				},
				1300: {
					items: 4
				},
				1400: {
					items: 4
				}
			}
  };
  activeTab: string = 'doc_bio';

  setActiveTab(tabName: string) {
    this.activeTab = tabName;
  }
  scrollToSection(section: HTMLElement) {
    if (section) {
      this.scrollTo(section);
    }
  }

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
