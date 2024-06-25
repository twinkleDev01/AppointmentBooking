import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../auth/auth.service";
import { tap } from "rxjs";
import { catchError } from "rxjs";
import { throwError } from "rxjs";
import { Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  UserId = JSON.parse(localStorage.getItem('UserDetail') || '{}')?.nameid;

  constructor(private authService: AuthService, private router:Router) { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // Do something with successful responses if needed
        }
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
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
        return throwError(error);
      })
    );
  }
}