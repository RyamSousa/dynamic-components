import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicComponent } from './components/my-modyle/dynamic/dynamic.component';
import { DefaultComponent } from './components/my-modyle/default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
