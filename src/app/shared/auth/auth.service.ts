import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJiNTJlZWFkMC1iMWNjLTQ3YmItYmI5MS1iNWJkMDRiNGE0MGMiLCJlbWFpbCI6IlRlc3RAZ21haWwuY29tIiwicm9sZSI6IlBhdGllbnQiLCJuYmYiOjE3MTg2MjE1NDcsImV4cCI6MTcxODYyNTE0NywiaWF0IjoxNzE4NjIxNTQ3LCJpc3MiOiJBcHBvaW50bWVudEJvb2tpbmdBcHBJc3N1ZXIiLCJhdWQiOiJBcHBvaW50bWVudEJvb2tpbmdBcHBBdWRpZW5jZSJ9.xIVjlJW5y-y1HbYDsNwE3YfXZVUa2wi5XwmGlG2th_I'
  baseUrl: string = environment.baseurl
  loginUrl:string='/Auth/login';
  LogOutUrl:string='/Auth/logout';
  constructor(private http:HttpClient) {
   }

  setToken(token: string): void {
    localStorage.setItem('token', token);
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

