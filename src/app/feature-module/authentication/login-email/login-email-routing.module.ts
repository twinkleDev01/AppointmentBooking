import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginEmailComponent } from './login-email.component';

const routes: Routes = [{ path: '', component: LoginEmailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginEmailRoutingModule { }
