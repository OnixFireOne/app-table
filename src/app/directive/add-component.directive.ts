import {Directive, ViewChild, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAddComponent]'
})
export class AddComponentDirective {

  constructor(public containerRef: ViewContainerRef) {
  }

}
