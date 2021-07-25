import { Component, HostBinding, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent  {

  @HostBinding('class.flex-container') valid: string;
}
