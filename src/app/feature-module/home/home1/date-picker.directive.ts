import { Directive, ElementRef, HostListener } from '@angular/core';
import { BsDaterangepickerDirective } from 'ngx-bootstrap/datepicker';

@Directive({
  selector: '[appDatePicker]',
  standalone: true
})
export class DatePickerDirective {

  constructor(private el: ElementRef, private bsDatepicker: BsDaterangepickerDirective) { }
  @HostListener('click') onClick() {
    // Open the datepicker on click
    this.bsDatepicker.show();
  }

  // @HostListener('document:click', ['$event.target']) onClickOutside(targetElement: any) {
  //   const clickedInside = this.el.nativeElement.contains(targetElement);
  //   if (!clickedInside) {
  //     // Always show the datepicker, do not hide it
  //     this.bsDatepicker.show();
  //   }
  // }
}
