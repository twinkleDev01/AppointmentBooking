import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditPurchaseRoutingModule } from './edit-purchase-routing.module';
import { EditPurchaseComponent } from './edit-purchase.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    EditPurchaseComponent
  ],
  imports: [
    CommonModule,
    EditPurchaseRoutingModule,
    SharedModule
  ]
})
export class EditPurchaseModule { }
