import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallComponent } from './call.component';

const routes: Routes = [
  {
    path: '',
    component: CallComponent,
    children: [
      {
        path: 'voice-call',
        loadChildren: () =>
          import('./voice-call/voice-call.module').then(
            (m) => m.VoiceCallModule
          ),
      },
      {
        path: 'video-call',
        loadChildren: () =>
          import('./video-call/video-call.module').then(
            (m) => m.VideoCallModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CallRoutingModule {}
