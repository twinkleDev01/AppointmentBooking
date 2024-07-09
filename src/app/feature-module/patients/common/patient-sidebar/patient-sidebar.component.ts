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
    this.getUserInfo();
    this.patientsService.userSubject.subscribe((res:any)=>{
      if(res){
        this.getUserInfo();
      }
    })
  }
  ngOnInit(){
  
  }
  isPatient:boolean =false
  Logout(){
localStorage.removeItem('token')
  localStorage.removeItem('UserDetail')
  this.isPatient=false
  this.router.navigate(['/authentication/login']);
  }
  getUserInfo(){
    this.patientsService.getPatientinfo().subscribe((res:any)=>{
      this.userInfo=res?.data;
    })
  }

  calculateAge(dobString:any) {
    // Convert the input date string to a Date object
    const dob = new Date(dobString);
    const today = new Date();

    // Calculate the age in years
    let age = today.getFullYear() - dob.getFullYear();

    // Adjust the age if the birthday hasn't occurred yet this year
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}
handleImageError(event: Event): void {
  const target = event.target as HTMLImageElement;
  target.src = '../../../../assets/img/dummy/doload.jpg'; // Specify the path to your default image
}
convertToUrl(filePath:string) {
  const baseUrl = "https://bookingapi.asptask.in/";
  const urlPath = filePath.replace(/\\/g, '/').replace('D:/Inetpub/vhosts/getsocialmediafollower.com/bookingapi.asptask.in/wwwroot/', '');
  const fullUrl = baseUrl + urlPath;
  return fullUrl;
}
}
