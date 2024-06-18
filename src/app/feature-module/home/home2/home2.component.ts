import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component {
  public routes = routes;
  public isClassAdded: boolean[] = [false];

  public slideConfig = {
    dots: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: false,
    nextArrow: false,
    rows: 1,
    responsive: [{
      breakpoint: 1199,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 776,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 2
      }
    }
  ]
  };
  public slideConfig2 = {
    dots: false,
    autoplay: false,
    margin: 20,
    slidesToShow: 3,
    speed: 500,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 776,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 567,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  public slideConfig3 = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    speed: 500,
    variableWidth: true,
    arrows: false,
    autoplay: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  toggleClass(index: number){
    this.isClassAdded[index] = !this.isClassAdded[index]
  }
  constructor(private router: Router) {}
  public navigation() {
    this.router.navigate([routes.search1]);
  }
}
