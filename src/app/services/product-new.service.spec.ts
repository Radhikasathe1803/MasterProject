import { TestBed } from '@angular/core/testing';

import { ProductNewService } from './product-new.service';

describe('ProductNewService', () => {
  let service: ProductNewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductNewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
