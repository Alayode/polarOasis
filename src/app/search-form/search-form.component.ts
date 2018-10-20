import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {YsSearchConfig} from './ys.search.config';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import 'rxjs/add/operator/map';
import 'date-fns';

@Component({
  selector: 'ys-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {



  isCollapsed: boolean;
  searchFormCollapseHide: boolean;

  appInitialOnload: boolean; // Maintains first time app is opened state.
  @Output() isCollapsedEvent = new EventEmitter<boolean>();
  config: any = YsSearchConfig;
  cityPairSearchForm: any; flightNumberSearchForm: any; codeShareSearchForm: any; tailNumberSearchForm: any;
  default: any = 'FN';
  searchby = [{code: 'OD', name: 'Origin & Destination'}, {code: 'TN', name: 'Tail Number'}, {code: 'FN', name: 'Flight Number'},
  {code: 'CS', name: 'Codeshare Airline  & Flight'}];

  constructor() { }

  ngOnInit() {
  }

}
