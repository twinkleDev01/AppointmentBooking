import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { partnersSlider } from 'src/app/shared/models/models';
@Component({
  selector: 'app-home5',
  templateUrl: './home5.component.html',
  styleUrls: ['./home5.component.scss']
})
export class Home5Component implements OnInit{
  public routes = routes;
  public partnersSlider: partnersSlider[] = [];
  myDateValue!: Date ;
date = new Date();
public isClassAdded: boolean[] = [false];


toggleClass(index: number){
this.isClassAdded[index] = !this.isClassAdded[index]
}
constructor(private router: Router,private data: DataService) {this.partnersSlider = this.data.partnersSlider;}
public navigation() {
  this.router.navigate([routes.search2]);
}
ngOnInit() {
  this.myDateValue = new Date();
}
onDateChange(newDate: Date) {
  console.log(newDate);
}
public ourServiceOption: OwlOptions = {
  loop: true,
  margin:24,
  dots: false,
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
    1000:{
      items:3
    }
  }
};
public ourDoctorsOption: OwlOptions = {
  loop: true,
			margin: 24,
			dots: false,
			nav: true,
			smartSpeed: 2000,
			navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
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
				1400: {
					items: 4
				},
				1300: {
					items: 3
				}
			}
};
public ourtestimonialOption: OwlOptions = {
  loop: true,
  margin: 24,
  dots: false,
  nav: true,
  smartSpeed: 2000,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
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
    }
  }
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
public ourBlogOption: OwlOptions = {
  loop: true,
  margin: 24,
  dots: false,
  nav: true,
  smartSpeed: 2000,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
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
      items: 3
    },
    1300: {
      items: 4
    }
  }
};
}
