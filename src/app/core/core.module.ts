// All global services will be used here.

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './apiService/api.service';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ApiService]
})
export class CoreModule { }
