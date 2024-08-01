/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { CommonService } from 'src/app/shared/common/common.service';
import { DataService } from 'src/app/shared/data/data.service';
import { header } from 'src/app/shared/models/sidebar-model';
import { routes } from 'src/app/shared/routes/routes';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { SidebarService } from 'src/app/shared/sidebar/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMobile!: boolean;
  public searchField  = false;
  public routes = routes;
  public header: header[];
  base = '';
  page = '';
  last = '';
 
  
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar: SidebarService,
    private router: Router,
    private auth: AuthService,
    private patientsService:PatientsService
  ) {
    this.isMobile = window.innerWidth <= 991;
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
  isPatient:boolean =false
ngOnInit(){
}
logout(route: string){
  // localStorage.removeItem('token')
  // localStorage.removeItem('UserDetail')
  this.isPatient=false
  this.auth.clearToken();
  this.router.navigate([route])
}
sendTrue() {
  this.patientsService.setButtonState(false);
}
}
