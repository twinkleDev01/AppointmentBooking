import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapGridComponent } from './map-grid.component';

const routes: Routes = [{ path: '', component: MapGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapGridRoutingModule { }
