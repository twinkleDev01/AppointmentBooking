import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseListRoutingModule } from './purchase-list-routing.module';
import { PurchaseListComponent } from './purchase-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PurchaseListComponent
  ],
  imports: [
    CommonModule,
    PurchaseListRoutingModule,
    SharedModule
  ]
})
export class PurchaseListModule { }
