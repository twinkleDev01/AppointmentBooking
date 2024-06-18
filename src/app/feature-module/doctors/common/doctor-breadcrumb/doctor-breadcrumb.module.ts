import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorBreadcrumbComponent } from './doctor-breadcrumb.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DoctorBreadcrumbComponent],
  imports: [CommonModule, RouterModule],
  exports: [DoctorBreadcrumbComponent],
})
export class DoctorBreadcrumbModule {}
