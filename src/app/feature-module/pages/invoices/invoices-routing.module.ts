import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './invoices.component';

const routes: Routes = [
  {
    path: '',
    component: InvoicesComponent,
    children: [
      {
        path: 'invoice-list',
        loadChildren: () =>
          import('./invoice-list/invoice-list.module').then(
            (m) => m.InvoiceListModule
          ),
      },
      {
        path: 'invoice-view',
        loadChildren: () =>
          import('./invoice-view/invoice-view.module').then(
            (m) => m.InvoiceViewModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoicesRoutingModule {}
