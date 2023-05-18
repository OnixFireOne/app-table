import {Injectable, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowActiveService {

  private readonly _windowIsActive$: Subject<boolean> = new Subject<boolean>();

  get windowIsHidden$(): Observable<boolean> {
    return this._windowIsActive$.asObservable();
  }

  constructor() {
    document.addEventListener('visibilitychange',()=>{
      this._windowIsActive$.next(document.hidden)
    })
  }
}
