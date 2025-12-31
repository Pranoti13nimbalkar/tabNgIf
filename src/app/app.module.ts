import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIfTabComponent } from './ng-if-tab/ng-if-tab.component';
import { NgForTabComponent } from './ng-for-tab/ng-for-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfTabComponent,
    NgForTabComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
