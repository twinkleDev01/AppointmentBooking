import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PatientSidebarComponent } from './patient-sidebar.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PatientSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[PatientSidebarComponent]
})
export class PatientSidebarModule { }
