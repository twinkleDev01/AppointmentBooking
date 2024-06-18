import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBillingRoutingModule } from './add-billing-routing.module';
import { AddBillingComponent } from './add-billing.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddBillingComponent
  ],
  imports: [
    CommonModule,
    AddBillingRoutingModule,
    SharedModule
  ]
})
export class AddBillingModule { }
