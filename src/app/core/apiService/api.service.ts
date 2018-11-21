import { Injectable } from '@angular/core';

// enable HTTP Services 
import { HttpClientModule } from '@angular/common/http';
import { Http, RequestOptions, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
// ToDo update rxjs
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';


/**
 * This Service will handle make the HTTP calls to GET the JSON from the designated url.
 * this service is designed to be used in the service calls through BLUE eye
 *
 **/

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  BASE_URL = '//jsonplaceholder.typicode.com';

  // All HttpClient methods return an RxJS Observable of something.
  // HTTP is a request/response protocol.
  // You make a request, it returns a single response.

  constructor(
    private http: HttpClient,
  ) { }
  /**
   * This method will perform a http request once the url and apikey are passed through
   * expects a json body
   *
   * @param {string} url takes a string data type for the url
   * @param  {any} apiKey
   * @returns {Observable<R>}
   */

  // https://angular.io/tutorial/toh-pt6
  // HttpClient.get returns the body of the response as an untyped JSON object by default. 
  // Applying the optional type specifier, <Hero[]> , gives you a typed result object.
  get(url: string) {
    const myHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get(url, { headers: myHeaders }


    );
  }

  put() {}

  getJson() {}

   /**
  *  TODO: post to be done a later date
  **/
 post() {}

 /**
 * TODO: delete to be done a later date
 **/
 delete() {}


}
