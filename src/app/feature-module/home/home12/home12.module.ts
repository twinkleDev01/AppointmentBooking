import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home12RoutingModule } from './home12-routing.module';
import { Home12Component } from './home12.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    Home12Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home12RoutingModule,
    SharedModule,
    SwiperModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class Home12Module { }
