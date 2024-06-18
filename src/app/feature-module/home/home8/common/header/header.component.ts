/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, HostListener } from '@angular/core';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { header } from 'src/app/shared/models/sidebar-model';
import { routes } from 'src/app/shared/routes/routes';
import { SidebarService } from 'src/app/shared/sidebar/sidebar.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public white_bg = false;
  public routes = routes;
  public header: header[];
  base = '';
  page = '';
  last = '';
  
  
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar: SidebarService
  ) {
    this.selectedClinic = this.clinics[0];
    this.common.base.subscribe((res: string) => {
      this.base = res;
    });
    this.common.page.subscribe((res: string) => {
      this.page = res;
    });
    this.common.last.subscribe((res: string) => {
      this.last = res;
    });
    this.header = this.data.header;
  }
  
  public toggleSidebar(): void {
    this.sidebar.openSidebar();
  }
  public hideSidebar(): void {
    this.sidebar.closeSidebar();
  }
  
  selectedClinic: any;
  clinics = [
    {
      name: 'English',
      value: 'family_dentistry',
      image: 'assets/img/flags/us.png',
    },
    {
      name: 'Japanese',
      value: 'dentistry',
      image: 'assets/img/flags/jp.png',
    },
  ];
 
  sticky = false;
  elementPosition = 0;
  @HostListener('window:scroll', ['$event'])
  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.elementPosition) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
    if (windowScroll == 0) {
      this.white_bg = false;
    } else {
      this.white_bg = true;
    }
  }
}
