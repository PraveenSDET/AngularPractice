import { TestBed } from '@angular/core/testing';

import { FictionbooksService } from './fictionbooks.service';

describe('FictionbooksService', () => {
  let service: FictionbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FictionbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
