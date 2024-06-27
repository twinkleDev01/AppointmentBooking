import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AuthInterceptor } from './shared/Interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    LoaderComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    ToastrModule.forRoot({
      // timeOut: 3000,
      positionClass: 'toast-top-right',
      // preventDuplicates: true,1
    }),
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
