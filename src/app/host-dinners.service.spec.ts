import { TestBed } from '@angular/core/testing';

import { HostDinnersService } from './host-dinners.service';

describe('HostDinnersService', () => {
  let service: HostDinnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostDinnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
