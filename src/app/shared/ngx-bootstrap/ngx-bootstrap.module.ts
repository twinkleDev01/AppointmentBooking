import { NgModule } from '@angular/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';

@NgModule({
  imports: [
    NgScrollbarModule,
    TimepickerModule.forRoot()
  ],
  exports: [
    NgScrollbarModule,
    TimepickerModule
  ],
})
export class NgxBootstrapModule {}
