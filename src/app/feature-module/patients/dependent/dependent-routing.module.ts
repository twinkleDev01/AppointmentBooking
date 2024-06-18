import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DependentComponent } from './dependent.component';

const routes: Routes = [
  {
    path: '',
    component: DependentComponent,
    children: [
      {
        path: 'edit-dependent',
        loadChildren: () =>
          import('./edit-dependent/edit-dependent.module').then(
            (m) => m.EditDependentModule
          ),
      },
      {
        path: 'add-dependent',
        loadChildren: () =>
          import('./add-dependent/add-dependent.module').then(
            (m) => m.AddDependentModule
          ),
      },
      {
        path: 'dependent-list',
        loadChildren: () =>
          import('./dependent-list/dependent-list.module').then(
            (m) => m.DependentListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DependentRoutingModule {}
