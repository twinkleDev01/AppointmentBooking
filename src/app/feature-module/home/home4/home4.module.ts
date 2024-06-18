import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home4RoutingModule } from './home4-routing.module';
import { Home4Component } from './home4.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';


@NgModule({
  declarations: [
    Home4Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home4RoutingModule
  ]
})
export class Home4Module { }
