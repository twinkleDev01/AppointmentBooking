import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-add-billing',
  templateUrl: './add-billing.component.html',
  styleUrls: ['./add-billing.component.scss']
})
export class AddBillingComponent {
  public routes = routes;
  public content1 = [0]
  public content2 = [0]
  
  addItem(){
    this.content1.push(1);
  }
  deleteItem1(index: number){
    this.content1.splice(index, 1)
  }
  deleteItem2(index: number){
    this.content2.splice(index, 1)
  }
}
