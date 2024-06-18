import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-edit-billing',
  templateUrl: './edit-billing.component.html',
  styleUrls: ['./edit-billing.component.scss']
})
export class EditBillingComponent {
  public routes = routes;
  public billingContent1 = [0];
  public billingContent2 = [0];
  public billingContent3 = [0];

  dltBilling1(index: number){
    this.billingContent1.splice(index, 1)
  }
  dltBilling2(index: number){
    this.billingContent2.splice(index, 1)
  }
  addEditBill(){
    this.billingContent2.push(1)
  }
  dltEditBill(index: number){
    this.billingContent2.splice(index, 1)
  }
}
