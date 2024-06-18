import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceListRoutingModule } from './invoice-list-routing.module';
import { InvoiceListComponent } from './invoice-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoiceListComponent
  ],
  imports: [
    CommonModule,
    InvoiceListRoutingModule,
    SharedModule
  ]
})
export class InvoiceListModule { }
