import { Component, HostListener } from '@angular/core';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { SidebarService } from 'src/app/shared/sidebar/sidebar.service';
import { routes } from 'src/app/shared/routes/routes';
import { header } from 'src/app/shared/models/sidebar-model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public searchField  = false;
  public routes = routes;
  public header: header[];
  base = '';
  page = '';
  last = '';
  public white_bg = false;
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
  
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar: SidebarService,
    private router: Router
  ) {
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
  
  toggleSearch(){
    this.searchField = !this.searchField
  }
  public navigation() {
    this.router.navigate([routes.search2]);
  }
}
