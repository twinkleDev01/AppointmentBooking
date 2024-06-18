import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking.component';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent,
    children: [
      {
        path: 'booking2',
        loadChildren: () =>
          import('./booking2/booking2.module').then((m) => m.Booking2Module),
      },
      {
        path: 'booking1',
        loadChildren: () =>
          import('./booking1/booking1.module').then((m) => m.Booking1Module),
      },
      {
        path: 'booking-success',
        loadChildren: () =>
          import('./booking-success/booking-success.module').then(
            (m) => m.BookingSuccessModule
          ),
      },
      {
        path: 'booking-success-one',
        loadChildren: () =>
          import('./booking-success-one/booking-success-one.module').then(
            (m) => m.BookingSuccessOneModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoutingModule {}
