import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  baseUrl: string = environment.baseurl
  getprescription:string ='/Prescription'
  getappointment:string ='/Appointment/appointments'
  deleteprescription:string ='/Prescription/DeletePrescription'
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Detail:any;
  constructor(private http:HttpClient) { 
    this.getUserDetail();
  }

  getUserDetail(): string | null {
    const userDetail = localStorage.getItem('UserDetail');
      if (userDetail) {
        try {
          this.Detail=JSON.parse(userDetail);
          return this.Detail;
        } catch (e) {
          console.error('Error parsing user detail from localStorage:', e);
          return null;
        }
      }
      return null;
    }

  getPrescription(){
  const url=`${this.baseUrl}${this.getprescription}?PatientId=${this.Detail?.nameid}`
    return this.http.get(url);
  }

  getAppointment(startDate?: string, endDate?: string, IsCanCelled?: boolean, IsCanCompleted?: boolean, IsUpcomming?: boolean) {
    let url = `${this.baseUrl}${this.getappointment}?userId=${this.Detail.nameid}`;
  
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
 }

 
  

 
