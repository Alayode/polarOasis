import { TestBed } from '@angular/core/testing';

import { CodeShareSearchService } from './code-share-search.service';

describe('CodeShareSearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodeShareSearchService = TestBed.get(CodeShareSearchService);
    expect(service).toBeTruthy();
  });
});
