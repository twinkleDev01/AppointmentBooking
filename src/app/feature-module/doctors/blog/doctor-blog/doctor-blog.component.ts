import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-doctor-blog',
  templateUrl: './doctor-blog.component.html',
  styleUrls: ['./doctor-blog.component.scss']
})
export class DoctorBlogComponent {
  public routes = routes;

}
