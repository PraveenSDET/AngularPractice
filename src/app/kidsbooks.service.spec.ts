import { TestBed } from '@angular/core/testing';

import { KidsbooksService } from './kidsbooks.service';

describe('KidsbooksService', () => {
  let service: KidsbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KidsbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
