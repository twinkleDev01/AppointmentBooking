import { Component, ViewEncapsulation } from '@angular/core';
import { Router, NavigationStart, Event as RouterEvent } from '@angular/router';
import { CommonService } from '../shared/common/common.service';
import { routes } from 'src/app/shared/routes/routes';
import { url } from '../shared/models/models';
@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PharmacyComponent {
  public routes = routes;
  public sidebarActive = false;
  public headerActive = false;

  constructor(private common: CommonService, private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        this.getRoutes(event);
      }
    });
    this.getRoutes(this.router);
  }

  public getRoutes(events: url) {
    const splitVal = events.url.split('/');
    this.common.base.next(splitVal[1]);
    this.common.page.next(splitVal[2]);
    this.common.last.next(splitVal[3]);
    if (
      events.url.split('/')[2] === 'pharmacy-login' ||
      events.url.split('/')[2] === 'pharmacy-forgot-password' ||
      events.url.split('/')[2] === 'lock-screen' ||
      events.url.split('/')[2] === 'pharmacy-register' ||
      events.url.split('/')[2] === 'errors'
    ) {
      this.sidebarActive = false;
      this.headerActive = false;
    } else {
      this.sidebarActive = true;
      this.headerActive = true;
    }
  }
}
