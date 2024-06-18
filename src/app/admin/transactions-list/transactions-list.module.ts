import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsListRoutingModule } from './transactions-list-routing.module';
import { TransactionsListComponent } from './transactions-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TransactionsListComponent
  ],
  imports: [
    CommonModule,
    TransactionsListRoutingModule,
    SharedModule
  ]
})
export class TransactionsListModule { }
