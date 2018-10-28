import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IconComponent} from './icon/icon.component';
import { externalLinks } from './externalLinks/external-links.config'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    IconComponent
  ]
})
export class SharedModule { }
