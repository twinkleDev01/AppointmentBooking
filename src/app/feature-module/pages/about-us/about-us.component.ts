import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/shared/data/data.service';
import { aboutUs } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  public routes = routes;
  public aboutUs: aboutUs[];
  Doctors:any;
  baseUrl: string = environment.ImgBaseUrl
  public doctorSlider: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1500, 
    autoplayHoverPause: true,
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
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  };

  public slideConfig = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 2000,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  constructor(private data: DataService,private patientsService: PatientsService,) {
    this.aboutUs = this.data.aboutUs;
  }
  ngOnInit(): void {
    this.getDoctors();
  }
  getDoctors(){
    this.patientsService.getDoctors().subscribe((res:any)=>{
      this.Doctors=res.result.data
    })
  }
  generateImageUrl(imageId:any) {
    return `${this.baseUrl}${imageId}`;
  }
handleImageError(event: Event): void {
  const target = event.target as HTMLImageElement;
  target.src = 'https://images.prismic.io/skinify/ZqnVuR5LeNNTxoko_doload.jpg?auto=format,compress'; // Specify the path to your default image
}

}
