import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public routes = routes
  public selectedValue = '';
  public selectedValue1 = '';
  
  selectedList: data[] = [
    { value: 'India' },
    { value: 'US' },
   
  ];
  selectedList1: data[] = [
    { value: 'USD' },
    { value: 'INR' },
   
  ];

}
