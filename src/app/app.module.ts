import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { IconComponent } from './shared';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';


const ANGULAR_MODULES = [
  HttpClientModule,
  BrowserModule,
  BrowserAnimationsModule,
  FormsModule
];

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatSidenavModule,
  MatSelectModule,
  MatExpansionModule
]



@NgModule({
  declarations: [
    AppComponent,
    MenuNavigationComponent,
    SearchFormComponent,
    IconComponent
  ],
  imports: [
    ANGULAR_MODULES,
    MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
