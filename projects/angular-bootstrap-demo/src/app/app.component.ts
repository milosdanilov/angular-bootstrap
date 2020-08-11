import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dismissibleAlert = {};

  onAlertClose() {
    console.log('close');
  }

  onAlertDispose() {
    console.log('dispose');
    this.dismissibleAlert = null;
  }
}
