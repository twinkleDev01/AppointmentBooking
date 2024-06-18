import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { NgScrollbarModule } from 'ngx-scrollbar';


@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    HeaderComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgScrollbarModule
  ],

})
export class AdminModule { }
