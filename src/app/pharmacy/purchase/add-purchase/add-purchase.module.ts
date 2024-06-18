import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPurchaseRoutingModule } from './add-purchase-routing.module';
import { AddPurchaseComponent } from './add-purchase.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddPurchaseComponent
  ],
  imports: [
    CommonModule,
    AddPurchaseRoutingModule,
    SharedModule
  ]
})
export class AddPurchaseModule { }
