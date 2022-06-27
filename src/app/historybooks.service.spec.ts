import { TestBed } from '@angular/core/testing';

import { HistorybooksService } from './historybooks.service';

describe('HistorybooksService', () => {
  let service: HistorybooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorybooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
