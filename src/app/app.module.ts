import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


const ANGULAR_MODULES = [
  HttpClientModule,
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
    ANGULAR_MODULES,
    MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
