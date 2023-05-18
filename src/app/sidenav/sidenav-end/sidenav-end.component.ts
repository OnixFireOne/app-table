import {Component, OnInit} from '@angular/core';
import {CoinCard, CoinContent, CoinData, CoinMarketDataService} from '../../service/coin-market-data.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {SideNavService} from '../../service/side-nav.service';
import {take, takeUntil} from 'rxjs';
import {
  DialogContentCoinDialogComponent
} from '../../content/dialog/dialog-content-coin-dialog/dialog-content-coin-dialog.component';
import {BaseDestroyDirective} from '../../directive/base-destroy.directive';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';
import {DecimalPipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidenav-end',
  templateUrl: './sidenav-end.component.html',
  styleUrls: ['./sidenav-end.component.scss']
})
export class SidenavEndComponent extends BaseDestroyDirective implements OnInit{


  title = 'CryptoTableAjaxPopup';
  dataCoinContent: CoinContent[];
  dataCoin: CoinData;
  supply: number | null;
  isLoadingContent: boolean;
  isLoadingProgressBar: boolean;
  sessionDataCoin: Map<string, CoinContent[]> = new Map();
  menuArray = ['Markets'];
  moveX: number;
  mouseDown = false;



  toggles: boolean; //It's toggle target for link in the element of card open in window(true) or _blank(false)


  constructor(
    private readonly _matDialog: MatDialog,
    private readonly _sideNavToggleService: SideNavService,
    private readonly _httpService: CoinMarketDataService,
    private readonly _pipeNumber: DecimalPipe,
    private readonly _router:Router
  ) {
    super();
  }

  ngOnInit() {

    this.toggles = !!localStorage.getItem('openLinkInWindow');

    this._sideNavToggleService.sideNavData$
      .pipe(
        takeUntil(this._onDestroy$),
      )
      .subscribe((data) => {
        this.dataCoin = data;
        //console.log('dataCoin', data, this.sessionDataCoin);

        this.supply = this.calculateSupply();

        this.isLoadingContent = true;
        //console.log('ContentIsLoadingTrue',this.isLoadingContent);

        if(this.sessionDataCoin.has(data.id)){
          this.dataCoinContent = this.sessionDataCoin.get(data.id);
          setTimeout(()=>{
            this.isLoadingContent = false;
          },300)

          //console.log('ContentIsLoadingFalse',this.isLoadingContent);
          return;
        }

        this.isLoadingProgressBar = true;
        this._sideNavToggleService.isLoading = true;
        //console.log('serviceTriggerIsLoading',this._sideNavToggleService.isLoading);

        this._httpService.fetchDataCoinContent(this.dataCoin.id, this.dataCoin.symbol)
          .pipe(take(1))
          .subscribe((dataContent) => {
            this.dataCoinContent = dataContent;
            this.sessionDataCoin.set(data.id, dataContent);

            //console.log('dataContent', dataContent);
            this.isLoadingProgressBar = false;
            this.isLoadingContent = this._sideNavToggleService.isLoading = false;
            //console.log('lastTriggerFalse', this._sideNavToggleService.isLoading)
          });
      });


  }


  openCoinContentDialog(): MatDialogRef<any>{
     return this._matDialog.open(DialogContentCoinDialogComponent,{
      data: this.dataCoin,
      autoFocus: false,
    });
  }

  closeSideNav() {
    this._sideNavToggleService.toggleSideNav(false);
  }


  cardCoinListener(card: CoinCard, block:CoinContent, $event?) {
    let url = card.url;
    let title = card.title;

    if(card.chart) {
      this.dataCoin['card'] = card;
      this.openCoinContentDialog();
      $event.preventDefault();
      return;
    }

    switch (card.title){
      case 'Tradingview': {
        this.openCoinContentDialog();
        $event.preventDefault();
        return;
      }
      case 'Coindar': {
        if(block.default) url = card.url.replace('!', this.dataCoin.market_cap_rank.toString());
        break;
      }

      default :{
        if(block.default) url = card.url.replace('!', this.dataCoin.id);
      }
    }

    if(block.title == "Change" && !["Coingecko","CoinMarketCap",'BestChange'].includes(card.title) && block.default ) url = card.url.replace('!', this.dataCoin.symbol.toUpperCase());

    this.windowOpen(url,title,$event);
    card.url = url;
  }

  windowOpen(url:string, title:string, $event:MouseEvent){
    if(this.toggles){
      window.open(url, title,'width=1200,height=720');
      $event.preventDefault();
    }
  }


  windowOpenSlideChange($event: MatSlideToggleChange) {
    $event.checked? localStorage.setItem('openLinkInWindow', 'true') : localStorage.removeItem('openLinkInWindow');
  }

  calculateSupply(): number | null {
    let value = this.dataCoin.max_supply;
    if(value){
      value = this.dataCoin.circulating_supply * 100 / value;
      //console.log(value);
    }
    return value;
  }

  supplyTooltip() {
    let str = `Supply: ${this._pipeNumber.transform(this.supply,'1.0-2')}% \n Circ.Sup.: ${this._pipeNumber.transform(this.dataCoin.circulating_supply)} \n Max-Sup.: ${this._pipeNumber.transform(this.dataCoin.max_supply)}`;
    return str;
  }

  menuUrls(card: CoinCard, block: CoinContent) {
    if(block.default){
      const symbol = this.dataCoin.symbol.toUpperCase();
      card.urls.map((item)=>{
        let url = item.url;

        switch (card.title) {
          case 'Markets':{
            url = url.replace('!',this.dataCoin.id);
            break;
          }
          default: {
            url = url.replace('!',symbol);
          }
        }

        item.title = item.title.replace('!',symbol);
        item.url = url;
        //item.url = item.url.replace('!',symbol);
        //if(card.title == 'Markets') item.url = item.url.replace('!',this.dataCoin.id);
      })
      //console.log(card.urls);
    }
  }

  menuClick($event: MouseEvent, item: { title: string; url: string }) {
    this.windowOpen(item.url,item.title, $event);
  }

  addClassText(price: number) {
    return (price > 0)? 'text-green-500' : 'text-red-500';
  }

  moveCloseNav($event) {

    if(this.mouseDown){
      if($event.clientX > this.moveX){
        this.mouseDown = !this.mouseDown;
        this.closeSideNav();
      }
    } else {
      this.moveX = $event.clientX + 150;
    }
    //console.log('moseDown',this.mouseDown);
  }

}
