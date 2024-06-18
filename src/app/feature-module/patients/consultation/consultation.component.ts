import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent {
  public routes = routes;
  activeTabIndex = 0;

  activateTab(index: number) {
    this.activeTabIndex = index;
  }
  
  isTabActive(index: number) {
    return this.activeTabIndex === index;
  }
}
