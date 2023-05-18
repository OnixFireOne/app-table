import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private readonly _url$: Subject<string> = new Subject<string>();

  get url$(): Observable<string> {
    return this._url$.asObservable();
  }

  constructor() { }

  pushUrl(url:string): void {
    this._url$.next(url);
  }

}
