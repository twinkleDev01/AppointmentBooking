import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public toogleUserSidebar: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('sidebarPosition') || ''
  );

  public toggleSideBar: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('isMiniSidebar') || 'false'
  );

  public toggleMobileSideBar: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem('isMobileSidebar') || 'false'
  );

  public expandSideBar: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private data: DataService) {
   
  }

  public switchAdminSideMenuPosition(): void {
    if (localStorage.getItem('isMiniSidebar')) {
      this.toggleSideBar.next('false');
      localStorage.removeItem('isMiniSidebar');
      this.data.adminSidebar.map((mainMenus) => {
        mainMenus.menu.map((resMenu) => {
          const menuValue = sessionStorage.getItem('menuValue');
          if (menuValue && menuValue == resMenu.menuValue) {
            resMenu.showSubRoute = true;
          }
        });
      });
    } else {
      this.toggleSideBar.next('true');
      localStorage.setItem('isMiniSidebar', 'true');
      this.data.adminSidebar.map((mainMenus) => {
        mainMenus.menu.map((resMenu) => {
          resMenu.showSubRoute = false;
        });
      });
    }
  }

  public switchAdminMobileSideBarPosition(): void {
    if (localStorage.getItem('isMobileSidebar')) {
      this.toggleMobileSideBar.next("false");
      localStorage.removeItem('isMobileSidebar');
    } else {
      this.toggleMobileSideBar.next("true");
      localStorage.setItem('isMobileSidebar', 'true');
    }
  }

  public openSidebar(): void {
    // to set sidebar position app component html using "menu-opened" class
    if (localStorage.getItem('sidebarPosition')) {
      localStorage.removeItem('sidebarPosition');
      this.toogleUserSidebar.next('false');
    } else {
      localStorage.setItem('sidebarPosition', 'true');
      this.toogleUserSidebar.next('true');
    }
  }

  public closeSidebar(): void {
    // hide sidebar
    this.toogleUserSidebar.next('false');
    localStorage.removeItem('sidebarPosition');
  }
}
