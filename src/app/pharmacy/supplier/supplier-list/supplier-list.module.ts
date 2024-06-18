import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierListRoutingModule } from './supplier-list-routing.module';
import { SupplierListComponent } from './supplier-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SupplierListComponent
  ],
  imports: [
    CommonModule,
    SupplierListRoutingModule,
    SharedModule
  ]
})
export class SupplierListModule { }
