import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  baseUrl: string = environment.baseurl
  getprescription:string ='/Prescription'
  getappointment:string ='/Appointment/appointments'
  deleteprescription:string ='/Prescription/DeletePrescription'
  getissues:string='/Issue'
  getavailableSlot:string ='/Slots/GetAvailableSlot'
  bookappointment:string ='/Appointment/book_appointment'
  getPatientInfo:string ='/Patient/patientInfoDetails'
  updatePatientInfo:string ='/Patient/updatePatientDetails'
  getinvoice:string ='/Invoice/GetInvoices'
  contactInfo:string='/ContactUs'
  getDoctorsList:string ='/Doctor/ListOfDoctorWithCountAppointments'
  reschedule:string='/Zoom/MeetingReschedule'
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Detail:any;
  // private userSubject = new BehaviorSubject<any>(null); // Initial value null
  // user$ = this.userSubject.asObservable();
  public userSubject:BehaviorSubject<any> = new BehaviorSubject<any>({});
  public invoiceData:BehaviorSubject<any> = new BehaviorSubject<any>({});
  public Prescriptions:BehaviorSubject<any> = new BehaviorSubject<any>({});
  private buttonStateSource = new BehaviorSubject<boolean>(false);
  buttonState$ = this.buttonStateSource.asObservable();
  constructor(private http:HttpClient, private auth: AuthService) { 
    this.auth.uderDetail.subscribe((res:any)=>{
      if(res){
        this.Detail = res
      }else{
        this.Detail = localStorage.getItem('UserDetail')
        this.Detail = JSON.parse(this.Detail);
      }
    })
  }


  setButtonState(state: boolean) {
    this.buttonStateSource.next(state);
  }
  
  getPrescription(){
  const url=`${this.baseUrl}${this.getprescription}?PatientId=${this.Detail?.nameid}`
    return this.http.get(url);
  }

  getAppointment(startDate?: string, endDate?: string, IsCanCelled?: boolean, IsCanCompleted?: boolean, IsUpcomming?: boolean) {
    let url = `${this.baseUrl}${this.getappointment}?userId=${this.Detail?.nameid}`;
  
    if (startDate) {
      url += `&startDate=${startDate}`;
    }
    if (endDate) {
      url += `&endDate=${endDate}`;
    }
    if (IsCanCelled !== undefined) {
      url += `&IsCanCelled=${IsCanCelled}`;
    }
    if (IsCanCompleted !== undefined) {
      url += `&IsCanCompleted=${IsCanCompleted}`;
    }
    if (IsUpcomming !== undefined) {
      url += `&IsUpcomming=${IsUpcomming}`;
    }
  
    return this.http.get(url);
  }
  

 deletePrescription(prescriptionID:string){
const url=`${this.baseUrl}${this.deleteprescription}?PrescriptionId=${prescriptionID}`
return this.http.post(url,'');
}

getIssues(){
const url=`${this.baseUrl}${this.getissues}`
return this.http.get(url);
}

getAvailableSlot(){
const url=`${this.baseUrl}${this.getavailableSlot}`
return this.http.get(url);
}

bookAppointment(data:any){
const url=`${this.baseUrl}${this.bookappointment}`;
return this.http.post(url, data);
}

getPatientinfo(){
const url=`${this.baseUrl}${this.getPatientInfo}?PatientId=${this.Detail?.nameid}`;
return this.http.get(url);
}

updatePatientinfo(data:any){
const url=`${this.baseUrl}${this.updatePatientInfo}`;
return this.http.post(url, data);
}

getInvoice(){
const url=`${this.baseUrl}${this.getinvoice}?PatientId=${this.Detail?.nameid}`;
return this.http.get(url);
}

contactData(data:any){
const url=`${this.baseUrl}${this.contactInfo}`;
return this.http.post(url, data);
}
getDoctors(){
  const url=`${this.baseUrl}${this.getDoctorsList}`;
  return this.http.get(url);
}

rescheduleMeeting(data:any,appointmentId:any){
const url=`${this.baseUrl}${this.reschedule}/${appointmentId}`;
return this.http.post(url, data);
}

 }

 
  

 
