import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacyComponent } from './pharmacy.component';
import { PharmacyAuthGuard } from '../shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PharmacyComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../pharmacy/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      {
        path: 'products',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'categories',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      {
        path: 'purchase',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./purchase/purchase.module').then((m) => m.PurchaseModule),
      },
      {
        path: 'sales',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./sales/sales.module').then((m) => m.SalesModule),
      },
      {
        path: 'supplier',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./supplier/supplier.module').then((m) => m.SupplierModule),
      },
      {
        path: 'transactions-list',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./transactions-list/transactions-list.module').then(
            (m) => m.TransactionsListModule
          ),
      },
      {
        path: 'reports',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./reports/reports.module').then((m) => m.ReportsModule),
      },
      {
        path: 'profile',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./profile/profile.module').then((m) => m.ProfileModule),
      },
      {
        path: 'settings',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./settings/settings.module').then((m) => m.SettingsModule),
      },

      {
        path: 'customer-orders',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./customer-orders/customer-orders.module').then(
            (m) => m.CustomerOrdersModule
          ),
      },
      {
        path: 'dashboard',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'invoice',
        canActivate: [PharmacyAuthGuard],
        loadChildren: () =>
          import('./invoice/invoice.module').then((m) => m.InvoiceModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PharmacyRoutingModule {}
