import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { materialModule } from './material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgApexchartsModule } from 'ng-apexcharts';
import { PaginationHeaderModule } from './pagination-header/pagination-header.module';
import { CustomPaginationModule } from './custom-pagination/custom-pagination.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CountUpModule } from 'ngx-countup';
import { LightboxModule } from 'ngx-lightbox';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { LightgalleryModule } from 'lightgallery/angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatSliderModule } from '@angular/material/slider';
import { PatientSidebarModule } from '../feature-module/patients/common/patient-sidebar/patient-sidebar.module';
import { DoctorBreadcrumbModule } from '../feature-module/doctors/common/doctor-breadcrumb/doctor-breadcrumb.module';
import { PatientBreadcrumbModule } from '../feature-module/patients/common/patient-breadcrumb/patient-breadcrumb.module';
import { DoctorSidebarModule } from '../feature-module/doctors/common/doctor-sidebar/doctor-sidebar.module';
import { ChipsModule } from 'primeng/chips';
import { AuthInterceptor } from './Interceptor/auth.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materialModule,
    HttpClientModule,
    NgApexchartsModule,
    PaginationHeaderModule,
    CustomPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      showMaskTyped: false,
    }),

    SlickCarouselModule,
    BsDatepickerModule.forRoot(),
    NgCircleProgressModule.forRoot({
      "radius": 70,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#65A30D",
      "innerStrokeColor": "#65A30D",
      "innerStrokeWidth": 10,
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false,
      "showSubtitle": false,
      "showTitle" : false,
     
      
    }),
    CarouselModule,
    TimepickerModule,
    CountUpModule,
    GoogleMapsModule,
    LightboxModule,
    NgxMatIntlTelInputComponent,
    LightgalleryModule,
    NgScrollbarModule,
    MatSliderModule,
    NgScrollbarModule,
    PatientSidebarModule,
    DoctorBreadcrumbModule,
    PatientBreadcrumbModule,
    DoctorSidebarModule,
    ChipsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    materialModule,
    HttpClientModule,
    NgApexchartsModule,
    PaginationHeaderModule,
    CustomPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule,
    SlickCarouselModule,
    BsDatepickerModule,
    NgCircleProgressModule,
    CarouselModule,
    TimepickerModule,
    CountUpModule,
    LightboxModule,
    NgxMatIntlTelInputComponent,
    LightgalleryModule,
    NgScrollbarModule,
    MatSliderModule,
    NgScrollbarModule,
    PatientSidebarModule,
    DoctorBreadcrumbModule,
    PatientBreadcrumbModule,
    DoctorSidebarModule,
    ChipsModule
  ],
  providers: [DatePipe,{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
})
export class SharedModule {}
