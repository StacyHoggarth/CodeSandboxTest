import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, Textbox, DisplayText } from './app.component';

@NgModule({
  declarations: [AppComponent, Textbox, DisplayText],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
