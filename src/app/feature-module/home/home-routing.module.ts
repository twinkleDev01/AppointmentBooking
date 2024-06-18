import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'home1',
        pathMatch: 'full',
      },
      {
        path: 'home1',
        loadChildren: () =>
          import('./home1/home1.module').then((m) => m.Home1Module),
      },
      {
        path: 'home2',
        loadChildren: () =>
          import('./home2/home2.module').then((m) => m.Home2Module),
      },
      {
        path: 'home3',
        loadChildren: () =>
          import('./home3/home3.module').then((m) => m.Home3Module),
      },
      {
        path: 'home4',
        loadChildren: () =>
          import('./home4/home4.module').then((m) => m.Home4Module),
      },
      {
        path: 'home5',
        loadChildren: () =>
          import('./home5/home5.module').then((m) => m.Home5Module),
      },
      {
        path: 'home6',
        loadChildren: () =>
          import('./home6/home6.module').then((m) => m.Home6Module),
      },
      {
        path: 'home7',
        loadChildren: () =>
          import('./home7/home7.module').then((m) => m.Home7Module),
      },
      {
        path: 'home8',
        loadChildren: () =>
          import('./home8/home8.module').then((m) => m.Home8Module),
      },
      {
        path: 'home9',
        loadChildren: () =>
          import('./home9/home9.module').then((m) => m.Home9Module),
      },
      {
        path: 'home10',
        loadChildren: () =>
          import('./home10/home10.module').then((m) => m.Home10Module),
      },
      {
        path: 'home11',
        loadChildren: () =>
          import('./home11/home11.module').then((m) => m.Home11Module),
      },
      {
        path: 'home12',
        loadChildren: () =>
          import('./home12/home12.module').then((m) => m.Home12Module),
      },
      {
        path: 'home13',
        loadChildren: () =>
          import('./home13/home13.module').then((m) => m.Home13Module),
      },
      {
        path: 'home14',
        loadChildren: () =>
          import('./home14/home14.module').then((m) => m.Home14Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
