import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import {
  listingDetails,
  listingDetails2,
  nurseSliderOne,
  nurseSlidertwo,
  recommendedBlog,
  restaurants,
  shops,
} from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-home13',
  templateUrl: './home13.component.html',
  styleUrls: ['./home13.component.scss'],
})
export class Home13Component {
  public routes = routes;
  public isClassAdded: boolean[] = [false];
  public nurseSliderOne: nurseSliderOne[];
  public nurseSlidertwo: nurseSlidertwo[];
  public recommendedBlog: recommendedBlog[] = [];
  public restaurants: restaurants[] = [];
  public shop: shops[] = [];
  public listingDetails: listingDetails[] = [];
  public listingDetails2: listingDetails2[] = [];

  public activeTab: Array<string> = [''];
  constructor(private data: DataService, private router: Router) {
    this.nurseSliderOne = this.data.nurseSliderOne;
    this.nurseSlidertwo = this.data.nurseSlidertwo;
    this.recommendedBlog = this.data.recommendedBlog;
    this.restaurants = this.data.restaurants;
    this.shop = this.data.shops;
    this.listingDetails = this.data.listingDetails;
    this.listingDetails2 = this.data.listingDetails2;
  }
  public nurseSlider: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
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
  public recommendedBlogOwlOptions: OwlOptions = {
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
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

  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }

  @ViewChild('videoElement') videoElement!: ElementRef;

  activateVideoClass = false;

  public slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-thumbnails-img',
    nav: true,
  };
  public slideConfig2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.work-video-img',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    nav: true,
  };
  isVideoActive = false;

  toggleActiveClass() {
    this.isVideoActive = !this.isVideoActive;
    window.location.href =
      'https://media.istockphoto.com/id/1026837780/video/female-doctor-discusses-diagnosis-with-senior-male-patient.mp4?s=mp4-640x640-is&k=20&c=xuEa4-MNFJQTG0rsrImvNp_JSes0bA-ugZEFFVRse9Q=';
  }
}
