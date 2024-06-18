import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home11RoutingModule } from './home11-routing.module';
import { Home11Component } from './home11.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Home11Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home11RoutingModule,
    SharedModule
  ]
})
export class Home11Module { }
