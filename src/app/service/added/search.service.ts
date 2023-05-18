import {Injectable, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {map, Observable, startWith} from 'rxjs';
import {CoinMarketDataService} from '../coin-market-data.service';

export interface CoinSearchAuto {
  img: string,
  name: string,
  symbol: string,
  id: string,
  page: string
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public coinCtrl = new FormControl('');
  public filteredCoins$: Observable<CoinSearchAuto[]>;
  public coinsSearch: CoinSearchAuto[];

  coins: CoinSearchAuto[] = [
    {
      img: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      name: 'Bitcoin',
      symbol: 'BTC',
      id: 'bitcoin',
      page: '1'
    },
    {
      img: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      name: 'Ethereum',
      symbol: 'ETH',
      page: '1',
      id: 'ethereum'
    },
    {
      img: 'https://assets.coingecko.com/coins/images/325/large/Tether.png?1668148663',
      name: 'Tether',
      symbol: 'USDT',
      id: 'tether',
      page: '1'
    },
    {
      img: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389',
      name: 'USD Coin',
      symbol: 'USDC',
      id: 'usdc-coin',
      page: '1'
    }
  ]

  constructor(
    private _httpCoinService: CoinMarketDataService
  ) {
    this.filteredCoins$ = this.coinCtrl.valueChanges.pipe(
      startWith(''),
      map(coin => {

        return coin ? this._filterCoins(coin) : this.coins
      }),
    );
  }


  private _filterCoins(value: string): CoinSearchAuto[] {
    const filterValue = value.toLowerCase();
    if(!this.coinsSearch) console.log('Not arrived');

    let filter = this.coinsSearch.filter(coin =>
      coin.name.toLowerCase().includes(filterValue) || coin.symbol.toLowerCase().includes(filterValue)
    )

    // filter.forEach((v,k)=> {
    //   let len = filter.filter(fv => fv.name == v.name);
    //   if(len.length >1 ) filter.splice(k,len.length -1 );
    // })

    filter = [...new Map(filter.map(m => [m.name, m])).values()];

    return filter;
  }

  // private _getCoinFromSearch(value: string): CoinSearchAuto[] {
  //   this._httpCoinService
  // }
}
