import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-add-prescription',
  templateUrl: './add-prescription.component.html',
  styleUrls: ['./add-prescription.component.scss']
})
export class AddPrescriptionComponent {
  public routes = routes;
  public content = [0]
  
  addItem(){
    this.content.push(1);
  }
  deleteItem(index: number){
    this.content.splice(index, 1)
  }
}
