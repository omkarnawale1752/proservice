import { TestBed } from '@angular/core/testing';

import { HospiService } from './hospi.service';

describe('HospiService', () => {
  let service: HospiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
