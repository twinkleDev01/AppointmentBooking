import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceReportRoutingModule } from './invoice-report-routing.module';
import { InvoiceReportComponent } from './invoice-report.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InvoiceReportComponent
  ],
  imports: [
    CommonModule,
    InvoiceReportRoutingModule,
    SharedModule
  ]
})
export class InvoiceReportModule { }
