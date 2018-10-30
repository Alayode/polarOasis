import { TestBed } from '@angular/core/testing';

import { FlightNumberSearchService } from './flight-number-search.service';

describe('FlightNumberSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightNumberSearchService = TestBed.get(FlightNumberSearchService);
    expect(service).toBeTruthy();
  });
});
