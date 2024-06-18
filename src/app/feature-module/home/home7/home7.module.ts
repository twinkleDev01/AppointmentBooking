import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home7RoutingModule } from './home7-routing.module';
import { Home7Component } from './home7.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Home7Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home7RoutingModule,
    SharedModule
  ]
})
export class Home7Module { }
