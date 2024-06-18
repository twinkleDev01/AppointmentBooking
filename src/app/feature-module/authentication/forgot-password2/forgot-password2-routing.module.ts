import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPassword2Component } from './forgot-password2.component';

const routes: Routes = [{ path: '', component: ForgotPassword2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgotPassword2RoutingModule { }
