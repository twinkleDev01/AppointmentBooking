import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorSidebarComponent } from '../doctor-sidebar/doctor-sidebar.component';
import {MatSelectModule} from '@angular/material/select';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [DoctorSidebarComponent],
  imports: [CommonModule, MatSelectModule, RouterModule],
  exports: [DoctorSidebarComponent],
})
export class DoctorSidebarModule {}
