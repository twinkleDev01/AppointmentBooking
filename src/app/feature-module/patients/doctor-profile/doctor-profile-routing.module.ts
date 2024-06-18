import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorProfileComponent } from './doctor-profile.component';

const routes: Routes = [
  { path: '', component: DoctorProfileComponent,children:[
    {
      path: 'doctor-profile1',
      loadChildren: () =>
        import('./doctor-profile1/doctor-profile1.module').then(
          (m) => m.DoctorProfile1Module
        ),
    },
    {
      path: 'doctor-profile2',
      loadChildren: () =>
        import('./doctor-profile2/doctor-profile2.module').then(
          (m) => m.DoctorProfile2Module
        ),
    },

  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorProfileRoutingModule {}
