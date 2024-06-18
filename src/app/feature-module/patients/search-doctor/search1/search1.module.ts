import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Search1RoutingModule } from './search1-routing.module';
import { Search1Component } from './search1.component';
import { SharedModule } from 'src/app/shared/shared.module';
 


@NgModule({
  declarations: [
    Search1Component
  ],
  imports: [
    CommonModule,
    Search1RoutingModule,
    SharedModule,
     
  ]
})
export class Search1Module { }
