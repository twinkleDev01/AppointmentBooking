import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDependentRoutingModule } from './add-dependent-routing.module';
import { AddDependentComponent } from './add-dependent.component';


@NgModule({
  declarations: [
    AddDependentComponent
  ],
  imports: [
    CommonModule,
    AddDependentRoutingModule
  ]
})
export class AddDependentModule { }
