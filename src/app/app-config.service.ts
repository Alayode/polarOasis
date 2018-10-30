import { Injectable } from '@angular/core';
import { AppConfigGlobal } from './app-config.type';



/**
 * This service is used to manage the URL and its API_KEY with the service
 * each Url is defined before it is initialized with its constructor
 *
 **/
@Injectable()
export class AppConfigService {

  /** public variable that takes a string will be added to every other Url **/
      BASE_URL: string;
  /** API KEY **/
      API_KEY: string;

  /** public variable that takes a  **/
      pollingInterval: number;

      resetPollingInterval: number;

  /** public variable that takes a string  **/
      jbOriginsUrl: string;

  /** public variable that takes a string  **/
      codeShareUrl: string;

  /** public variable that takes a string  **/
      crewDetailsUrl: string;

  /** public variable that takes a string  **/
      crewPairingUrl: string;

  /** public variable that takes a string  **/
      inflightAmenities: string;

  /** public variable that takes a string  **/
      crewServiceUrl: string;

  /** public variable that takes a string  **/
      fuelServiceUrl: string;

  /** public variable that takes a string  **/
      searchStatsUrl: string;

  /** public variable that takes a string  **/
      onBoardServiceUrl: string;

  /** public variable that takes a string  **/
      historyServiceUrl: string;

  /** public variable that takes a string  **/
      reportServiceUrl: string;

  /** public variable that takes a string  **/
      cityPairUrl: string;

  /** public variable that takes a string  **/
      tailNumberSearchUrl: string;

  /** public variable that takes a string  **/
      flightDetailsUrl: string;

  /** public variable that takes a string  **/
      codeShareSearchURL: string;
      delayDetailsUrl: string;
      delayCodeHistoryUrl: string;
      tailTrackingUrl: string;
      paxDetailsUrl: string;
      paxCountsUrl: string;
      etdUpdatesUrl: string;
      delayCodesUrl: string;
      flightNumberSearchUrl: string;
      flightStatusUpdateUrl: string;
      claimIdUrl: string;
      updateDelayCodes: string;
      graphAPIUrl: string;

  constructor() {
    this.pollingInterval = 60000;
    this.resetPollingInterval = 3000;
    /**
     *
     * there should be some custom logic here at some point to change
     the base URL
     *
     */

    this.BASE_URL = 'http://jbmcllcrbt7000.cloud.jetblue.com:8080/';

    /**
     *
     *  there should be some custom logic here that changes the API key based on
     *    enviornment
     */

    this.API_KEY = 'jb-blueeyeui-diq-580ec390-c781-11e6-b828-52540025c1cb';

    this.codeShareSearchURL = this.BASE_URL + 'flight/codeshare/v1';
    this.codeShareUrl = this.BASE_URL + 'reference/partner-airlines/codeshare/v1';
    this.jbOriginsUrl = this.BASE_URL + 'od/origins/v1';
    this.crewDetailsUrl = this.BASE_URL + 'crew/flight/pairing/v1';
    this.crewPairingUrl = this.BASE_URL + 'crew/pairing/v1';
    this.inflightAmenities = this.BASE_URL + 'flight/details/misc/v1';
    this.fuelServiceUrl = this.BASE_URL + 'flight/fueldata/v1';
    this.cityPairUrl = this.BASE_URL + 'flight/citypair/v1';
    this.tailNumberSearchUrl = this.BASE_URL + 'flight/tailnumber/v1';
    this.flightNumberSearchUrl = this.BASE_URL + 'flight/details/v1';
    this.flightDetailsUrl = this.BASE_URL + 'flight/details/v1';
    this.delayDetailsUrl = this.BASE_URL + 'blueeye/flight/delaycomments/history/v1';
    this.delayCodeHistoryUrl = this.BASE_URL + 'blueeye/flight/delaycomments/history/v1';
    this.tailTrackingUrl = this.BASE_URL + 'flight/tailtracking/v1';
    this.paxDetailsUrl = this.BASE_URL + 'pax/details/v1';
    this.paxCountsUrl = this.BASE_URL + 'pax/counts/v1';
    this.etdUpdatesUrl = this.BASE_URL + 'blueeye/flight/etd/history/v1';
    this.delayCodesUrl = this.BASE_URL + 'blueeye/flight/delaycodeslookup/v1';
    this.flightStatusUpdateUrl = this.BASE_URL + 'blueeye/flight/status/v1';
    this.claimIdUrl = this.BASE_URL + 'blueeye/flight/claimid/v1';
    this.updateDelayCodes = this.BASE_URL + 'blueeye/flight/delay-codes-comments/v1';
    this.graphAPIUrl = 'https://graph.windows.net/d9217073-9527-487c-9687-b6bbd93ed621/me?api-version=1.6';
  }
}
