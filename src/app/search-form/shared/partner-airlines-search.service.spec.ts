import { TestBed } from '@angular/core/testing';

import { PartnerAirlinesSearchService } from './partner-airlines-search.service';

describe('PartnerAirlinesSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartnerAirlinesSearchService = TestBed.get(PartnerAirlinesSearchService);
    expect(service).toBeTruthy();
  });
});
