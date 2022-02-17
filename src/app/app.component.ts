import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentTheme = 'Autumn';
  @HostBinding('class.autum') get autumTheme() {
    return this.currentTheme === 'Autumn';
  }
  @HostBinding('class.pastel') get pastelTheme() {
    return this.currentTheme === 'Pastel';
  }
  themes = ['Pastel', 'Autumn'];
}
