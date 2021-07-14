import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [BrowserModule, MatCardModule, MatButtonModule],
  declarations: [AppComponent, ListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
