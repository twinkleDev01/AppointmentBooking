import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-doctor-pending-blog',
  templateUrl: './doctor-pending-blog.component.html',
  styleUrls: ['./doctor-pending-blog.component.scss']
})
export class DoctorPendingBlogComponent {
  public routes = routes;

}
