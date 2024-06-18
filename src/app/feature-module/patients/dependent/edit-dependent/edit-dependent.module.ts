import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditDependentRoutingModule } from './edit-dependent-routing.module';
import { EditDependentComponent } from './edit-dependent.component';


@NgModule({
  declarations: [
    EditDependentComponent
  ],
  imports: [
    CommonModule,
    EditDependentRoutingModule
  ]
})
export class EditDependentModule { }
