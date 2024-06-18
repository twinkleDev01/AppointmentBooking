import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddSupplierRoutingModule } from './add-supplier-routing.module';
import { AddSupplierComponent } from './add-supplier.component';


@NgModule({
  declarations: [
    AddSupplierComponent
  ],
  imports: [
    CommonModule,
    AddSupplierRoutingModule
  ]
})
export class AddSupplierModule { }
