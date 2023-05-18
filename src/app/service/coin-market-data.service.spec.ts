import { TestBed } from '@angular/core/testing';

import { CoinMarketDataService } from './coin-market-data.service';

describe('CoinMarketDataService', () => {
  let service: CoinMarketDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinMarketDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
