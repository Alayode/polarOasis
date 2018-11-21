import { TestBed } from '@angular/core/testing';

import { DisableBodyScrollService } from './disable-body-scroll.service';

describe('DisableBodyScrollService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisableBodyScrollService = TestBed.get(DisableBodyScrollService);
    expect(service).toBeTruthy();
  });
});
