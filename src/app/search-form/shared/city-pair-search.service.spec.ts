import { TestBed } from '@angular/core/testing';

import { CityPairSearchService } from './city-pair-search.service';

describe('CityPairSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityPairSearchService = TestBed.get(CityPairSearchService);
    expect(service).toBeTruthy();
  });
});
