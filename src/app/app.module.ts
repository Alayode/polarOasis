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
import { LandingComponent } from './landing/landing.component';
import { FooterComponent } from './footer/footer.component';
// import { HttpClient } from '@angular/common/http';
import { landingConfig } from './landing/landing.config';
import { CityPairFormComponent } from './search-form/city-pair-form/city-pair-form.component';
import { CodeShareFormComponent } from './search-form/code-share-form/code-share-form.component';
import { FlightNumberFormComponent } from './search-form/flight-number-form/flight-number-form.component';
import { TailNumberFormComponent } from './search-form/tail-number-form/tail-number-form.component';

// ToDo:  Installing Redux
/**
 * // Redux:
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { store } from './store/store';
import { IAppState } from './store/app-state.type';

 */



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
    IconComponent,
    LandingComponent,
    FooterComponent,
    CityPairFormComponent,
    CodeShareFormComponent,
    FlightNumberFormComponent,
    TailNumberFormComponent
  ],
  imports: [
    ANGULAR_MODULES,
    MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
