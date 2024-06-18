import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorAddBlogRoutingModule } from './doctor-add-blog-routing.module';
import { DoctorAddBlogComponent } from './doctor-add-blog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorAddBlogComponent
  ],
  imports: [
    CommonModule,
    DoctorAddBlogRoutingModule,
    SharedModule
  ]
})
export class DoctorAddBlogModule { }
