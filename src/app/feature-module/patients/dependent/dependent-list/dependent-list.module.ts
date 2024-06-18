import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependentListRoutingModule } from './dependent-list-routing.module';
import { DependentListComponent } from './dependent-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DependentListComponent
  ],
  imports: [
    CommonModule,
    DependentListRoutingModule,
    SharedModule
  ]
})
export class DependentListModule { }
