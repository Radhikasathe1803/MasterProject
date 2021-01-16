import { TestBed } from '@angular/core/testing';

import { CpucoolerService } from './cpucooler.service';

describe('CpucoolerService', () => {
  let service: CpucoolerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CpucoolerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
