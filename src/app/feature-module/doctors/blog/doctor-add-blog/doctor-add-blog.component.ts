import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-doctor-add-blog',
  templateUrl: './doctor-add-blog.component.html',
  styleUrls: ['./doctor-add-blog.component.scss']
})
export class DoctorAddBlogComponent {
  public routes = routes;
  constructor(private router: Router) {}

  public navigation() {
    this.router.navigate([routes.doctorBlog]);
  }
}
