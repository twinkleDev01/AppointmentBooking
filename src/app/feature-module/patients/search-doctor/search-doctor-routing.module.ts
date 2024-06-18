import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchDoctorComponent } from './search-doctor.component';

const routes: Routes = [
  {
    path: '',
    component: SearchDoctorComponent,
    children: [
      {
        path: 'search1',
        loadChildren: () =>
          import('./search1/search1.module').then((m) => m.Search1Module),
      },
      {
        path: 'search2',
        loadChildren: () =>
          import('./search2/search2.module').then((m) => m.Search2Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchDoctorRoutingModule {}
