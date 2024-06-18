import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorBlogComponent } from './doctor-blog.component';

const routes: Routes = [{ path: '', component: DoctorBlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorBlogRoutingModule { }
