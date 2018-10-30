import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchFormComponent } from './search-form.component';
import { CityPairFormComponent } from './city-pair-form/city-pair-form.component';
import { TailNumberFormComponent } from './tail-number-form/tail-number-form.component';
import { FlightNumberFormComponent } from './flight-number-form/flight-number-form.component';
import { CodeShareFormComponent } from './code-share-form/code-share-form.component';

import { SharedModule } from '../shared/shared.module';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { FlightNumberSearchService } from './shared/flight-number-search.service';
import { CodeShareSearchService } from './shared/code-share-search.service';
import  { CityPairSearchService } from './shared/city-pair-search.service';
import { PartnerAirlinesSearchService } from './shared/partner-airlines-search.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class SearchFormModule { }
