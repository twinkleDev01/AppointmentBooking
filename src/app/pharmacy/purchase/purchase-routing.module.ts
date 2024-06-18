import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PurchaseComponent } from './purchase.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent,
    children: [
      {
        path: 'purchase-list',
        loadChildren: () =>
          import('./purchase-list/purchase-list.module').then(
            (m) => m.PurchaseListModule
          ),
      },
      {
        path: 'add-purchase',
        loadChildren: () =>
          import('./add-purchase/add-purchase.module').then(
            (m) => m.AddPurchaseModule
          ),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'edit-purchase',
        loadChildren: () =>
          import('./edit-purchase/edit-purchase.module').then(
            (m) => m.EditPurchaseModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule {}
