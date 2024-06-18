import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialitiesRoutingModule } from './specialities-routing.module';
import { SpecialitiesComponent } from './specialities.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SpecialitiesComponent
  ],
  imports: [
    CommonModule,
    SpecialitiesRoutingModule,
    SharedModule
  ]
})
export class SpecialitiesModule { }
