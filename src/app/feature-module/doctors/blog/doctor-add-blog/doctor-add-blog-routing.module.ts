import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAddBlogComponent } from './doctor-add-blog.component';

const routes: Routes = [{ path: '', component: DoctorAddBlogComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorAddBlogRoutingModule { }
