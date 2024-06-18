import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditBillingRoutingModule } from './edit-billing-routing.module';
import { EditBillingComponent } from './edit-billing.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditBillingComponent
  ],
  imports: [
    CommonModule,
    EditBillingRoutingModule,
    SharedModule
  ]
})
export class EditBillingModule { }
