import { TestBed } from '@angular/core/testing';

import { MotherBoardService } from './mother-board.service';

describe('MotherBoardService', () => {
  let service: MotherBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotherBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
