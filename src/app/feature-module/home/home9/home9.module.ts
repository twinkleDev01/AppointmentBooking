import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home9RoutingModule } from './home9-routing.module';
import { Home9Component } from './home9.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Home9Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home9RoutingModule,
    SharedModule
  ]
})
export class Home9Module { }
