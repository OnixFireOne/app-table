import {Directive, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

@Directive({
  selector: '[appBaseDestroy]'
})
export class BaseDestroyDirective implements OnDestroy {

  readonly _onDestroy$: Subject<void> = new Subject<void>();

  constructor() { }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
