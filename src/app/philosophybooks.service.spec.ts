import { TestBed } from '@angular/core/testing';

import { PhilosophybooksService } from './philosophybooks.service';

describe('PhilosophybooksService', () => {
  let service: PhilosophybooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhilosophybooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
