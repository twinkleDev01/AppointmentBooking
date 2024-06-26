import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-chat-doctor',
  templateUrl: './chat-doctor.component.html',
  styleUrls: ['./chat-doctor.component.scss']
})
export class ChatDoctorComponent {
  public routes = routes;
  public chat = false;

  showChat(){
    this.chat = !this.chat;
  }
  public onlineList: OwlOptions = {
    margin: 0,
    nav: false,
    loop: false,
    dots: false,
    autoplaySpeed: 2000,
    responsive: {
      0: {
        items: 5,
      },
      768: {
        items: 5,
      },
      1170: {
        items: 5,
      },
    },
  };
}
