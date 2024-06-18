import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorsComponent,
    children: [
      {
        path: 'map-grid',
        loadChildren: () =>
          import('./map-grid/map-grid.module').then((m) => m.MapGridModule),
      },
      {
        path: 'map-list',
        loadChildren: () =>
          import('./map-list/map-list.module').then((m) => m.MapListModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
