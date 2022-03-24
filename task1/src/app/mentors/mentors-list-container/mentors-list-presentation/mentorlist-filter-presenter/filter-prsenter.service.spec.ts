import { TestBed } from '@angular/core/testing';

import { FilterPrsenterService } from './filter-prsenter.service';

describe('FilterPrsenterService', () => {
  let service: FilterPrsenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterPrsenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
