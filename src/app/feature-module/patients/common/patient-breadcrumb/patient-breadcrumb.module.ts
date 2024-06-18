import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PatientBreadcrumbComponent } from './patient-breadcrumb.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PatientBreadcrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
   
  ],
  exports: [PatientBreadcrumbComponent]
})
export class PatientBreadcrumbModule { }
