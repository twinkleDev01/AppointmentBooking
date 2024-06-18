import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerOrdersRoutingModule } from './customer-orders-routing.module';
import { CustomerOrdersComponent } from './customer-orders.component';


@NgModule({
  declarations: [
    CustomerOrdersComponent
  ],
  imports: [
    CommonModule,
    CustomerOrdersRoutingModule
  ]
})
export class CustomerOrdersModule { }
