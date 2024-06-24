import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { Home1RoutingModule } from './home1-routing.module';
import { Home1Component } from './home1.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerDirective } from './date-picker.directive';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';


@NgModule({
  declarations: [
    Home1Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    Home1RoutingModule,
    SharedModule,
    BsDatepickerModule.forRoot(),
    CalendarModule,
    DatePickerDirective,
    DropdownModule,
    MultiSelectModule
  ]
})
export class Home1Module { }
