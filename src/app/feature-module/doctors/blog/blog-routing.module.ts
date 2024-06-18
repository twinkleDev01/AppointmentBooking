import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogComponent,
    children: [
      {
        path: 'doctor-blog',
        loadChildren: () =>
          import('./doctor-blog/doctor-blog.module').then(
            (m) => m.DoctorBlogModule
          ),
      },
      {
        path: 'doctor-add-blog',
        loadChildren: () =>
          import('./doctor-add-blog/doctor-add-blog.module').then(
            (m) => m.DoctorAddBlogModule
          ),
      },
      {
        path: 'edit-blog',
        loadChildren: () =>
          import('./edit-blog/edit-blog.module').then((m) => m.EditBlogModule),
      },
      {
        path: 'doctor-pending-blog',
        loadChildren: () =>
          import('./doctor-pending-blog/doctor-pending-blog.module').then(
            (m) => m.DoctorPendingBlogModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
