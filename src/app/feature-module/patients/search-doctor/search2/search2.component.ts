import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.scss']
})
export class Search2Component {
  public routes = routes;
  minvalue = 251;
  maxvalue = 401;
  public selectedValue = '';
  isClassAdded: boolean[] = [false];
  selectedList: data[] = [
    { value: 'A to Z' },
    { value: 'B to Z' },
    { value: 'C to Z' },
    { value: 'D to Z' },
    { value: 'E to Z' },
  ];
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }
}
