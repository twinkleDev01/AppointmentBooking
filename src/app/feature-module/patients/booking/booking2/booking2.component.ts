import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { booking2 } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-booking2',
  templateUrl: './booking2.component.html',
  styleUrls: ['./booking2.component.scss']
})
export class Booking2Component {
  public routes = routes;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  public booking2 : booking2[];
  public slideConfig = {
    dots: false,
    autoplay: false,
    infinite: true,
    variableWidth: false,
    slidesToShow: 7,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  constructor(private data: DataService) {
    this.maxDate.setDate(this.maxDate.getDate() + 7);
    this.bsRangeValue = [this.bsValue, this.maxDate];
    this.booking2 = this.data.booking2
  }
  visibleItems: { [key: number]: boolean } = {};

  toggleItemVisibility(index: number) {
    this.visibleItems[index] = !this.visibleItems[index];
  }

  isItemVisible(index: number): boolean {
    return this.visibleItems[index] || false;
  }
}
