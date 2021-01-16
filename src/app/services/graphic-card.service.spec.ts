import { TestBed } from '@angular/core/testing';

import { GraphicCardService } from './graphic-card.service';

describe('GraphicCardService', () => {
  let service: GraphicCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphicCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
