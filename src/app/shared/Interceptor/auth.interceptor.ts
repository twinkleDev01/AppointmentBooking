import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { tap, catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoaderServiceService } from '../loader/loader-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  UserId = JSON.parse(localStorage.getItem('UserDetail') || '{}')?.nameid;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loaderService: LoaderServiceService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();

    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
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
          const data = {
            LoginProvider: localStorage.getItem('token'),
            UserId: this.UserId,
          };
          this.authService.logout(data).subscribe((res) => {
            console.log(res);
            localStorage.clear();
            this.router.navigate(['/authentication/login']);
          });
        }
        return throwError(error);
      }),
      finalize(() => {
        this.loaderService.hide();
      })
    );
  }
}
