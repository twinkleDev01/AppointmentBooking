import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientsService } from 'src/app/shared/Service/patients.service';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { CommonService } from 'src/app/shared/common/common.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrl: './patient-sidebar.component.scss'
})
export class PatientSidebarComponent {
  public routes = routes
  public base = '';
  public page = '';
  public last = '';
  userInfo:any;
  Detail:any;
  UserId = JSON.parse(localStorage.getItem('UserDetail') || '{}')?.nameid;
  constructor(private common: CommonService,private authService:AuthService,private router:Router,private patientsService:PatientsService) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
    this.Detail = localStorage.getItem('UserDetail')
        this.Detail = JSON.parse(this.Detail);
        console.log(this.Detail,"27")
    this.getUserInfo();
  }
  ngOninit(){
    this.getUserInfo();
  }
  Logout(){
    
    const data={
      LoginProvider:localStorage.getItem('token'),
      UserId:this.UserId
    }
this.authService.logout(data).subscribe((res)=>{
  console.log(res);
  localStorage.clear();
  this.router.navigate(['/authentication/login']);
})
  }
  getUserInfo(){
    this.patientsService.getPatientinfo().subscribe((res:any)=>{
      console.log(res,"49");
      this.userInfo=res?.data;
    })
  }
}
