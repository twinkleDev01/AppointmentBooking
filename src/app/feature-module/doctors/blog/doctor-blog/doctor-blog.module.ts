import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorBlogRoutingModule } from './doctor-blog-routing.module';
import { DoctorBlogComponent } from './doctor-blog.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DoctorBlogComponent
  ],
  imports: [
    CommonModule,
    DoctorBlogRoutingModule,
    SharedModule
  ]
})
export class DoctorBlogModule { }
