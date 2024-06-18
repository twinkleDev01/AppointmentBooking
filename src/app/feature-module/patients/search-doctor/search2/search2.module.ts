import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Search2RoutingModule } from './search2-routing.module';
import { Search2Component } from './search2.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    Search2Component
  ],
  imports: [
    CommonModule,
    Search2RoutingModule,
    SharedModule
  ]
})
export class Search2Module { }
