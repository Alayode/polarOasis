import {  Component, OnInit, OnDestroy, Input  } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';

import { endsWith } from 'ramda';

@Component({
  selector: 'ys-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  @Input() control: FormControl;

  Calendar_Dates: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { 

  }

  ngOnInit() {
  }

}
