import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home10RoutingModule } from './home10-routing.module';
import { Home10Component } from './home10.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
 

@NgModule({
  declarations: [
    Home10Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home10RoutingModule,
    SharedModule,
     
  ]
})
export class Home10Module { }
