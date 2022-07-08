import { TestBed } from '@angular/core/testing';

import { CalcfunctsService } from './calcfuncts.service';

describe('CalcfunctsService', () => {
  let service: CalcfunctsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcfunctsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
