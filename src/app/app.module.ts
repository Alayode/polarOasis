import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatSidenavModule, MatToolbarModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


const ANGULAR_MODULES = [
  HttpClientModule,
  HttpClient,
  BrowserModule,
  BrowserAnimationsModule,
];

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatSidenavModule,
]



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ANGULAR_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
