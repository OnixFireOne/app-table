import {Directive, Input, ViewContainerRef} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Directive({
  selector: '[appDrawerSlidRef]'
})
export class DrawerSlidRefDirective {

  @Input('appDrawerSlidRef') drawerRef!: MatDrawer;

  constructor(public drawerRefElement: ViewContainerRef) { }

}
