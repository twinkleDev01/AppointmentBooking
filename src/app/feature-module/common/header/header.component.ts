/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
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
  public searchField  = false;
  public routes = routes;
  public header: header[];
  base = '';
  page = '';
  last = '';
  isPatient:boolean=false
  
  
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar: SidebarService,
    private router: Router,
    private auth: AuthService
  ) {
    this.auth.token.subscribe((res:any)=>{
      if(res){
        this.isPatient = true
      }else{
        this.isPatient = false
      }
    })
    if(!localStorage.getItem('token')){
      this.isPatient = false
    }else{
      this.isPatient = true
    }
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
    this.router.navigate([routes.search1]);
  }

 @HostListener('window:scroll', [])
  onWindowScroll() {
    const scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const headerOne = document.querySelector('.header-one');
    if (headerOne && scroll > 35) {
      headerOne.classList.add('header-space');
    } else if (headerOne) {
      headerOne.classList.remove('header-space');
    }

    const headerTen = document.querySelector('.header-ten');
    if (headerTen && scroll > 35) {
      headerTen.classList.add('header-space');
    } else if (headerTen) {
      headerTen.classList.remove('header-space');
    }
  }
  logout(){
    // localStorage.removeItem('token')
    // localStorage.removeItem('UserDetail')
    this.isPatient=false
    this.auth.clearToken();
  }
}
