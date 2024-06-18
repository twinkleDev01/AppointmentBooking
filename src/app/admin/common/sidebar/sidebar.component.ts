import { Component } from '@angular/core';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { adminSidebar } from 'src/app/shared/models/sidebar-model';
import { SidebarService } from 'src/app/shared/sidebar/sidebar.service';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public routes = routes;
  base = '';
  page = '';
  last = '';
  public adminSidebar: Array<adminSidebar> = [];
  public miniSidebar = false;
  public multilevel: Array<boolean> = [false, false, false];

  constructor(
    private sidebar: SidebarService,
    private common: CommonService,
    private data: DataService
  ) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
    this.adminSidebar = this.data.adminSidebar;
    this.sidebar.toggleSideBar.subscribe((res: string) => {
      if (res == 'true') {
        this.miniSidebar = true;
      } else {
        this.miniSidebar = false;
      }
    });
  }
  public expandSubMenus(menu: {
    menuValue: string;
    showSubRoute: boolean;
  }): void {
    sessionStorage.setItem('menuValue', menu.menuValue);
    this.adminSidebar.map((mainMenus) => {
      mainMenus.menu.map(
        (resMenu: { menuValue: string; showSubRoute: boolean }) => {
          if (resMenu.menuValue == menu.menuValue) {
            menu.showSubRoute = !menu.showSubRoute;
          } else {
            resMenu.showSubRoute = false;
          }
        }
      );
    });
  }
  public miniSideBarMouseHover(position: string): void {
    if (position == 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }
  public toggleAdminSideBar(): void {
    this.sidebar.switchAdminSideMenuPosition();
  }
  public toggleAdminMobileSideBar(): void {
    this.sidebar.switchAdminMobileSideBarPosition();
  }
  miniSideBarBlur(position: string) {
    if (position === 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }

  miniSideBarFocus(position: string) {
    if (position === 'over') {
      this.sidebar.expandSideBar.next(true);
    } else {
      this.sidebar.expandSideBar.next(false);
    }
  }
}
