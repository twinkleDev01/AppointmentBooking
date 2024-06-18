import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private common: CommonService,private authService:AuthService,private router:Router) {
    this.common.base.subscribe((base: string) => {
      this.base = base;
    });
    this.common.page.subscribe((page: string) => {
      this.page = page;
    });
    this.common.last.subscribe((last: string) => {
      this.last = last;
    });
  }
  Logout(){
    const UserId = JSON.parse(localStorage.getItem('UserDetail') || '{}')?.nameid;
    const data={
      LoginProvider:localStorage.getItem('token'),
      UserId:UserId
    }
this.authService.logout(data).subscribe((res)=>{
  console.log(res);
  localStorage.clear();
  this.router.navigate(['/authentication/login']);
})
  }
}
