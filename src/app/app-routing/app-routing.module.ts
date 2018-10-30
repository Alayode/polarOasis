import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';

export const routes: Routes = [
  {path: '', redirectTo: 'landing', pathMatch: 'full'},
  {
    path: 'searchresults',
    loadChildren: './+search-results/search-results.module#SearchResultsModule',
  },
  {
    path: 'flightdetail',
    loadChildren: './+flight-detail/flight-detail.module#FlightDetailModule',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,  { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
