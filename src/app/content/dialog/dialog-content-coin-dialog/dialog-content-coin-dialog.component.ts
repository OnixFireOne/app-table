import {AfterViewInit, Component, Inject, OnInit, Renderer2} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CoinData, CoinMarketDataService} from '../../../service/coin-market-data.service';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-dialog-content-coin-dialog',
  templateUrl: './dialog-content-coin-dialog.component.html',
  styleUrls: ['./dialog-content-coin-dialog.component.scss']
})
export class DialogContentCoinDialogComponent implements OnInit, AfterViewInit{
  isLoadingScript: boolean = true;
  //@ViewChild('tradingViewElement') tradingViewElement: HTMLDivElement;


  constructor(
    private _renderer2: Renderer2,
    private readonly _http: CoinMarketDataService,
    public dialogRef: MatDialogRef<DialogContentCoinDialogComponent>,
    @Inject(DOCUMENT) private _document: Document,
    @Inject(MAT_DIALOG_DATA) public data: CoinData){}

  ngOnInit() {

  }

  ngAfterViewInit() {

    // this._lazyLoadService.loadScript('https://s3.tradingview.com/tv.js').subscribe(()=>{
    //   const textScript = this._renderer2.createElement('script');
    //   textScript.text = `new TradingView.widget(
    //     {
    //       "autosize": true,
    //       "symbol": "BINANCE:${this.data.symbol.toUpperCase()}USDT",
    //       "interval": "D",
    //       "timezone": "Europe/Moscow",
    //       "theme": "light",
    //       "style": "1",
    //       "locale": "en",
    //       "toolbar_bg": "#f1f3f6",
    //       "enable_publishing": false,
    //       "hide_side_toolbar": false,
    //       "allow_symbol_change": true,
    //       "container_id": "tradingview_0e350"
    //     }
    //   );`;
    //   this._renderer2.appendChild(this._document.getElementById('tradingView'), textScript)
    // })
    let symbol = '';
    let theme = (!!localStorage.getItem('dark-mod'))? 'dark' : 'light';

    if(!this.data.card){
      const coinSymbol = this.data.symbol.toUpperCase();
      //let symbol = `BINANCE:${coinSymbol}USDT`;
      symbol = `${coinSymbol}USDT`;


      switch (this.data.symbol){
        case 'btc': {
          symbol = `INDEX:BTCUSD`;
          break;
        }
        case 'allcrypt': {
          symbol = 'CRYPTOCAP:TOTAL';
        }
      }

      if(['usdt','usdc'].includes(this.data.symbol)) symbol = `${coinSymbol}USD`;
    } else {
      symbol = this.data.card.symbol;
      this.data.card = undefined;
    }


    this.loadScript('https://s3.tradingview.com/tv.js').then( () =>
        this.loadTextScript(`
          new TradingView.widget(
        {
          "autosize": true,
          "symbol": "${symbol}",
          "interval": "D",
          "timezone": "Europe/Moscow",
          "theme": "${theme}",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "withdateranges": true,
          "hide_side_toolbar": false,
          "allow_symbol_change": true,
          "container_id": "tradingview_0e350"
        }
      );
      `,false)
    )

    // const tradingViewHTML = this._document.getElementById('tradingView');
    //
    // console.log(tradingViewHTML,this.tradingViewElement);
    //
    // const textScript = this._renderer2.createElement('script');
    // textScript.type = 'text/javascript';
    // textScript.src = 'https://s3.tradingview.com/tv.js';
    // //this._renderer2.appendChild(tradingViewHTML, textScript);
    //
    //
    // const srcScript = this._renderer2.createElement('script');
    // srcScript.text = `new TradingView.widget(
    //     {
    //       "autosize": true,
    //       "symbol": "BINANCE:${this.data.symbol.toUpperCase()}USDT",
    //       "interval": "D",
    //       "timezone": "Europe/Moscow",
    //       "theme": "light",
    //       "style": "1",
    //       "locale": "en",
    //       "toolbar_bg": "#f1f3f6",
    //       "enable_publishing": false,
    //       "hide_side_toolbar": false,
    //       "allow_symbol_change": true,
    //       "container_id": "tradingview_0e350"
    //     }
    //   );`;
    // setTimeout(()=>{
    //   //this._renderer2.appendChild(tradingViewHTML, srcScript)
    // },400);

  }

  loadTextScript(text: string, isLoading: boolean) {
    return new Promise(() => {
      const textScript = this._renderer2.createElement('script');
      textScript.text = text;
      this._renderer2.appendChild(this._document.getElementById('tradingView'), textScript);
      setTimeout(()=>{
        this.isLoadingScript = isLoading;
      },500);
    });
  }

  loadScript(url: string) {
    return new Promise((resolve, reject) => {
      const script = this._renderer2.createElement('script');
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      this._renderer2.appendChild(this._document.getElementById('tradingView'), script);
    });
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
