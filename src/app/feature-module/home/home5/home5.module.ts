import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Home5RoutingModule } from './home5-routing.module';
import { Home5Component } from './home5.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Home5Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home5RoutingModule,
    SharedModule
  ]
})
export class Home5Module { }
