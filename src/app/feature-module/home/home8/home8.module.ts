import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home8RoutingModule } from './home8-routing.module';
import { Home8Component } from './home8.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Home8Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home8RoutingModule,
    SharedModule
  ]
})
export class Home8Module { }
