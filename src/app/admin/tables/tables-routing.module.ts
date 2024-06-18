import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables.component';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
    children: [
      {
        path: 'data-tables',
        loadChildren: () =>
          import('./data-tables/data-tables.module').then(
            (m) => m.DataTablesModule
          ),
      },
      {
        path: 'tables-basic',
        loadChildren: () =>
          import('./tables-basic/tables-basic.module').then(
            (m) => m.TablesBasicModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule {}
