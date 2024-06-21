/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
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
  
  
  constructor(
    private common: CommonService,
    private data: DataService,
    private sidebar: SidebarService,
    private router: Router,
    private auth: AuthService
  ) {
    console.log("hii")
    this.auth.token.subscribe((res:any)=>{
      console.log(res)
      if(res){
        this.isPatient = true
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
  console.log("58")
}
logout(){
  console.log("81")
  localStorage.removeItem('token')
  this.isPatient=false
}
}
