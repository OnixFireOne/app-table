import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UrlService} from '../../../service/url.service';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.scss']
})
export class UrlComponent implements OnInit{

  constructor(
    private readonly _activeRouter: ActivatedRoute,
    private readonly _urlService: UrlService,
  ) {
  }

  ngOnInit() {
    this._activeRouter.params.subscribe(params =>{
      //console.log(params['id']);
      // if(params['id'] != 'error') {
      //   this._urlService.pushUrl(params['id']);
      // }
      this._urlService.pushUrl(params['id']);
    })
  }
}
