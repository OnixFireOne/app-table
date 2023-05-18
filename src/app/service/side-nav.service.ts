import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CoinData} from './coin-market-data.service';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {


  private readonly _sideNavToggle$: Subject<boolean> = new Subject<boolean>();
  private readonly _sideNavData$: Subject<CoinData> = new Subject<CoinData>();
  private readonly _sideNavUrl$: Subject<string> = new Subject<string>();

  public isLoading: boolean;
  public isOpenSide: boolean;

  get sideNavToggle$(): Observable<boolean> {
    return this._sideNavToggle$.asObservable();
  }
  get sideNavData$(): Observable<CoinData> {
    return this._sideNavData$.asObservable();
  }
  get sideNavUrl$(): Observable<string> {
    return this._sideNavUrl$.asObservable();
  }

  constructor() { }

  toggleSideNav(open: boolean): void {
    this._sideNavToggle$.next(open);
  }
  pushDataCoin(data: CoinData): void {
    this._sideNavData$.next(data)
  }

  pushUrl(url:string): void {
    this._sideNavUrl$.next(url);
  }

}
