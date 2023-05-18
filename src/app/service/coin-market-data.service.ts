import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CoinSearchAuto} from './added/search.service';

export interface CoinData {
  market_cap_rank: number | null,
  id: string,
  symbol: string,
  name: string,
  current_price: number | null,
  image: string,
  market_cap: number ,
  price_change_percentage_24h: number,
  price_change_percentage_7d_in_currency: number | null,
  price_change_percentage_30d_in_currency?: number,
  price_change_percentage_1y_in_currency?: number,
  circulating_supply?: number,
  max_supply?: number | null,
  ath?: number,
  ath_change_percentage?: number,
  ath_date?:number,
  atl?: number,
  atl_change_percentage?: number,
  atl_date?:number,
  isLoading?: boolean,
  card?: CoinCard
}

export interface CoinCard {
  title: string,
  id: number,
  url: string,
  thumbnailUrl: string,
  desc?: string,
  chart?: boolean, //activate tradingview dialog
  symbol?:string,
  menuActive?: boolean, //activate menu, include urls
  urls?: [{
    title: string,
    url: string,
  }]
}

export interface CoinContent {
  id?: number,
  title: string,
  links: CoinCard[],
  text?: string,
  default?: boolean,
  alert?: boolean
}

export interface PageTable {
  pages: number
}

@Injectable({
  providedIn: 'root'
})
export class CoinMarketDataService {

  private readonly _params: HttpParams = new HttpParams();

  constructor(private readonly _http: HttpClient) { }

  fetchCoins(page: string): Observable<CoinData[]>{
    //const url = 'assets/dataCoin2.json';
    const url = 'https://api.inp.one/api/coins/';
    let params = new HttpParams();
    params = params.appendAll({
      'page' : page,
    })
    return this._http.get<CoinData[]>(url,{
      params,
    });
  }

  fetchDataCoinContent(coinId: string,coinSymbol: string): Observable<CoinContent[]>{
    let params = new HttpParams();
    params = params.appendAll({
      'id' : coinId,
      'symbol' : coinSymbol
    })
    return this._http.get<CoinContent[]>(`https://api.inp.one/api/coins-content/`,{
      params
    });
  }

  getPagesTable(): Observable<PageTable>{
    return this._http.get<PageTable>('https://inp.one/app-table/assets/pagesTable.json');
  }

  getCoinForSearch(): Observable<CoinSearchAuto[]>{
    const url = 'https://api.inp.one/api/search/';
    //const params = {'search': true};
    return this._initHttpGet<CoinSearchAuto[]>(url);
  }


  private _initHttpGet<T>(url: string, params?: {}): Observable<T> {
    params = params? new HttpParams().appendAll(params) : '';
    return this._http.get<T>(url,params);
  }
}
