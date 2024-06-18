import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'product-list',
        loadChildren: () =>
          import('./product-list/product-list.module').then(
            (m) => m.ProductListModule
          ),
      },
      {
        path: 'add-product',
        loadChildren: () =>
          import('./add-product/add-product.module').then(
            (m) => m.AddProductModule
          ),
      },
      {
        path: 'outstock',
        loadChildren: () =>
          import('./outstock/outstock.module').then((m) => m.OutstockModule),
      },
      {
        path: 'expired',
        loadChildren: () =>
          import('./expired/expired.module').then((m) => m.ExpiredModule),
      },
      {
        path: 'edit-product',
        loadChildren: () =>
          import('./edit-product/edit-product.module').then(
            (m) => m.EditProductModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
