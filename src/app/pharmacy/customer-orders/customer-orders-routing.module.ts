import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerOrdersComponent } from './customer-orders.component';

const routes: Routes = [{ path: '', component: CustomerOrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerOrdersRoutingModule { }
