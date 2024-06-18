import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { PharmacyComponent } from './pharmacy.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { HeaderComponent } from './common/header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PharmacyComponent, HeaderComponent, SidebarComponent],
  imports: [CommonModule, PharmacyRoutingModule, SharedModule],
})
export class PharmacyModule {}
