import {YsSEARCH_TYPES} from './search.constants';

/**
 *
 * @type {{tripTypes: [{name: string; val: string},
 * name: string; val: string}];
 * warningDialogs: {fourWeekWarning: {title: string; message: string}};
 * labels: {trip: {depart: string; return: string};
 * city: {depart: string; arrive: string};
 * submit: string; searchAgain: string};
 * blueeye: {flightNumber: string;
 * codeshare: string; Tail: string; sn: string};
 * defaults: {originIATA: string; tripType: string;
 * tripDate: {depart: any; return: any;
 * scheduleExtension: string};
 * pax: {ADT: number; CHD: number; INF: number}};
 * urls: {faq: string}; invalidSearchError: string;
 * errors: {invalidSearch: string;
 * returnDate: {required: string};
 * departDate: {required: string};
 * departCity: {required: string};
 * returnCity: {required: string}}}}
 *
 */
export const YsSearchConfig = {
  tripTypes: [{
    name: 'Round Trip',
    val: YsSEARCH_TYPES.RETURN_TRIP,
  }, {
    name: 'One Way',
    val: YsSEARCH_TYPES.ONE_WAY,
  }],
  warningDialogs: {
    fourWeekWarning: {
      title: 'Are you sure?',
      message: `You have selected a return date more then 4 weeks after your
      depature date. Is this intentional?`,
    },
  },
  labels: {
    trip: {
      depart: 'Depart',
      return: 'Return',
    },
    city: {
      depart: 'Origin',
      arrive: 'Destination',
    },
    submit: 'Find It',
    searchAgain: 'Search Again',
  },
  blueeye: {
    flightNumber: 'Flight Number',
    codeshare: 'CodeShare flights',
    Tail: 'Tail Number',
    sn: 's/n',
  },
  defaults: {
    originIATA: 'JFK',
    tripType: YsSEARCH_TYPES.ONE_WAY,
    tripDate: {
      depart: undefined,
      return: undefined,
      scheduleExtension: '2016-06-10',
    },
    pax: {
      ADT: 1,
      CHD: 0,
      INF: 0,
    },
  },
  urls: {
    faq: '//www2.jetblue.com/ajax-data/booker/v1/modal.faq.shtml',
  },
  invalidSearchError: 'Something is wrong with your search criteria.',
  errors: {
    invalidSearch: '',
    returnDate: {required: 'Return Date is required'},
    departDate: {required: 'Depart Date is required'},
    departCity: {required: 'Depart City is required'},
    returnCity: {required: 'Return City is required'},
  },
};



