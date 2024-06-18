import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditSupplierRoutingModule } from './edit-supplier-routing.module';
import { EditSupplierComponent } from './edit-supplier.component';


@NgModule({
  declarations: [
    EditSupplierComponent
  ],
  imports: [
    CommonModule,
    EditSupplierRoutingModule
  ]
})
export class EditSupplierModule { }
