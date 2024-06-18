import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPhoneComponent } from './login-phone.component';

const routes: Routes = [{ path: '', component: LoginPhoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginPhoneRoutingModule { }
