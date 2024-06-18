import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from './supplier.component';

const routes: Routes = [
  {
    path: '',
    component: SupplierComponent,
    children: [
      {
        path: 'supplier-list',
        loadChildren: () =>
          import('./supplier-list/supplier-list.module').then(
            (m) => m.SupplierListModule
          ),
      },
      {
        path: 'edit-supplier',
        loadChildren: () =>
          import('./edit-supplier/edit-supplier.module').then(
            (m) => m.EditSupplierModule
          ),
      },
      {
        path: 'add-supplier',
        loadChildren: () =>
          import('./add-supplier/add-supplier.module').then(
            (m) => m.AddSupplierModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupplierRoutingModule {}
