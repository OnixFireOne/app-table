import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';
import {SideNavService} from './service/side-nav.service';
import {BaseDestroyDirective} from './directive/base-destroy.directive';
import {takeUntil} from 'rxjs';
import {StyleManager} from './service/style-manager.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseDestroyDirective implements OnInit{

  @ViewChild(MatDrawer) drawer: MatDrawer;

  title = 'CryptoTableAjaxPopup';

  constructor(
    private readonly _sideNavToggleService: SideNavService,
    private readonly _styleManager: StyleManager,
    private readonly _router: Router
  ) {
    super();
  }

  ngOnInit() {
    if(!!localStorage.getItem('dark-mod')) this._styleManager.toggleDarkTheme();

    this._sideNavToggleService.sideNavToggle$.pipe(
      takeUntil(this._onDestroy$),
    )
      .subscribe((value: boolean) => {
        value ? this.drawer.open() : this.drawer.close();
        this._sideNavToggleService.isOpenSide = value;
        if(value == false) this._router.navigate(['/']);
      });
  }
}
