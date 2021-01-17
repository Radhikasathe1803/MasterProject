import { TestBed } from '@angular/core/testing';

import { PowersupplyService } from './powersupply.service';

describe('PowersupplyService', () => {
  let service: PowersupplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PowersupplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
