import { TestBed } from '@angular/core/testing';

import { BoxerService } from './boxer.service';

describe('BoxerService', () => {
  let service: BoxerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
