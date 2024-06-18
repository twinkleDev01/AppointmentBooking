import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home1RoutingModule } from './home1-routing.module';
import { Home1Component } from './home1.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Home1Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home1RoutingModule,
    SharedModule
  ]
})
export class Home1Module { }
