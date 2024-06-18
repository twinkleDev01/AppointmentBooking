import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorPendingBlogComponent } from './doctor-pending-blog.component';

const routes: Routes = [{ path: '', component: DoctorPendingBlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorPendingBlogRoutingModule { }
