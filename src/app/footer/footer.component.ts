import { Component, OnInit } from '@angular/core';
import { footerConfig } from './footer.config';
import { externalLinks } from '../shared/externalLinks/external-links.config';
import { select } from '@angular-redux/store';
@Component({
  selector: 'ys-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
