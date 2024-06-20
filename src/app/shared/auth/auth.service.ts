import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 baseUrl: string = environment.baseurl
  loginUrl:string='/Auth/mobile_login';
  LogOutUrl:string='/Auth/logout';

  private _token = new BehaviorSubject('')
  token = this._token.asObservable()
  constructor(private http:HttpClient) {
   }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this._token.next(token);
    this.getUserDetails(token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserDetails(token: string){
    if (token) {
      localStorage.setItem('UserDetail',JSON.stringify(jwtDecode(token)))
      return jwtDecode(token);
    }
    return null;
  }

  clearToken(): void {
    localStorage.removeItem('token');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login(data: any) {
   const url=this.baseUrl+this.loginUrl
return this.http.post(url,data)
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  logout(data: any) {
const url=`${this.baseUrl}${this.LogOutUrl}?UserId=${data.UserId}&LoginProvider=${data.LoginProvider}`
return this.http.post(url,'')
  }
}

