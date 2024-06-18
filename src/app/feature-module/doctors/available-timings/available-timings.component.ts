/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnDestroy, Renderer2 } from '@angular/core';
import { CommonService } from 'src/app/shared/common/common.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-available-timings',
  templateUrl: './available-timings.component.html',
  styleUrls: ['./available-timings.component.scss'],
})
export class AvailableTimingsComponent implements OnDestroy {
  public routes = routes;
  public base = '';
  public page = '';
  public last = '';
  selectedClinic: any;
  clinics = [
    {
      name: 'The Family Dentistry Clinic',
      value: 'family_dentistry',
      image: 'assets/img/doctors-dashboard/clinic-01.jpg',
    },
    {
      name: 'Dentistry Clinic',
      value: 'dentistry',
      image: 'assets/img/doctors-dashboard/clinic-02.jpg',
    },
  ];

  constructor(private renderer: Renderer2, private common: CommonService) {
    this.selectedClinic = this.clinics[0];
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
    if (this.page == 'available-timings') {
      this.renderer.addClass(document.body, 'available-timings-img-select');
    }
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'available-timings-img-select');
  }
}
