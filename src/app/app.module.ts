import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ListComponent } from './list/list.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [BrowserModule, MatCardModule, MatButtonModule, MatButtonToggleModule, MatIconModule],
  declarations: [AppComponent, ListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
