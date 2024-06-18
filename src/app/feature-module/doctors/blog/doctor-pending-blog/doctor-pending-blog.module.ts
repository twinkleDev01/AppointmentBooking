import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorPendingBlogRoutingModule } from './doctor-pending-blog-routing.module';
import { DoctorPendingBlogComponent } from './doctor-pending-blog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorPendingBlogComponent
  ],
  imports: [
    CommonModule,
    DoctorPendingBlogRoutingModule,
    SharedModule
  ]
})
export class DoctorPendingBlogModule { }
