import { Component } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
@Component({
  selector: 'app-voice-call',
  templateUrl: './voice-call.component.html',
  styleUrls: ['./voice-call.component.scss']
})
export class VoiceCallComponent {
  public routes = routes;
  public videoIcon = true;
  public micIcon = true;
  changeMicIcon() {
    this.micIcon = !this.micIcon;
  }
  changeVideoIcon() {
    this.videoIcon = !this.videoIcon;
  }

}
