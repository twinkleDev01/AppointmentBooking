import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//     children: [
//       {
//         path: '',
//         redirectTo: 'home',
//         pathMatch: 'full',
//       },
//       {
//         path: 'home',
//         loadChildren: () =>
//           import('./home1/home1.module').then((m) => m.Home1Module),
//       }
//     ],
//   },
// ];

const routes: Routes = [
  {
            path: '',
            redirectTo: 'home',
            pathMatch: 'full',
          },
  {
            path: 'home',
            loadChildren: () =>
              import('./home1/home1.module').then((m) => m.Home1Module),
          }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
