import { Component } from '@angular/core';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-doctor-profile2',
  templateUrl: './doctor-profile2.component.html',
  styleUrl: './doctor-profile2.component.scss'
})
export class DoctorProfile2Component {
  public routes = routes;
  settings = {
    counter: false,
    plugins: [lgZoom],
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { index, prevIndex } = detail;
  };
}
