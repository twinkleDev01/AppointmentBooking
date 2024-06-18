import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home13RoutingModule } from './home13-routing.module';
import { Home13Component } from './home13.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Home13Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home13RoutingModule,
    SharedModule
  ]
})
export class Home13Module { }
