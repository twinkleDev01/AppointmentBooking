import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/common/common.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-breadcrumb',
  templateUrl: './patient-breadcrumb.component.html',
  styleUrl: './patient-breadcrumb.component.scss',
})
export class PatientBreadcrumbComponent {
  public routes = routes;

  base = '';
  page = '';
  last = '';
  constructor(private common: CommonService) {
    this.common.base.subscribe((res: string) => {
      this.base = res?.replaceAll('-', ' ');
    });
    this.common.page.subscribe((res: string) => {
      if (res === 'chat') {
        this.page = 'Message';
      } else if (res === 'appointments') {
        this.page = 'Patient Appointments';
      } else if (res === 'patient-accounts') {
        this.page = 'Accounts';
      } else if (res === 'patient-invoice') {
        this.page = 'Invoices';
      } else {
        this.last = this.page;
        this.page = res?.replaceAll('-', ' ');
      }
    });
    this.common.last.subscribe((res: string) => {
      this.last = res?.replaceAll('-', ' ');
    });
  }
}
