import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home14RoutingModule } from './home14-routing.module';
import { Home14Component } from './home14.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    Home14Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home14RoutingModule,
    SharedModule
  ]
})
export class Home14Module { }
