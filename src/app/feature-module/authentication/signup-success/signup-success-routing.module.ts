import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupSuccessComponent } from './signup-success.component';

const routes: Routes = [{ path: '', component: SignupSuccessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupSuccessRoutingModule { }
