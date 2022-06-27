import { TestBed } from '@angular/core/testing';

import { ClassicbooksService } from './classicbooks.service';

describe('ClassicbooksService', () => {
  let service: ClassicbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassicbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
