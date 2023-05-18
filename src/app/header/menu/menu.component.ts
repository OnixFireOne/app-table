import {Component, OnInit} from '@angular/core';
import {StyleManager} from '../../service/style-manager.service';


// export interface DataMenu{
//   title: string,
//   link: string,
//   iconName?: string,
//   submenu?: DataMenu[]
// }

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit{

  // dataMenu: DataMenu = {
  //   0: {title: 'Новости',link: '#'},
  //   1: {title: 'Криптовалюты', link: '#',
  //     submenu: {
  //       0: {title: 'Таблица', link: '#'},
  //       1: {title: 'Новые обзоры', link: '#'}
  //     }
  //   },
  //   2: {title: 'Криптоличности', link: '#',
  //     submenu: {
  //       0: {title: 'Обзоры', link: '#'},
  //       1: {title: 'Криптофонды', link: '#'}
  //     }
  //   },
  //   3: {title: 'Биржи', link: '#'},
  //   4: {title: 'Новичкам', link: '#',
  //     submenu: {
  //       0: {title: 'Полезное', link: '#'},
  //       1: {title: 'Словарь терминов', link: '#'}
  //     }
  //   },
  //   5: {title: '', link: '#'},
  //   6: {title: 'More', link: '#', iconName: 'more_vert',
  //     submenu:{
  //       0: {title: 'ICO', link: '#', iconName: 'dialpad'},
  //       1: {title: '', link: '#', iconName: 'notification'}
  //     }
  //   }
  // };
  // dataMenu: DataMenu[] = [
  //   {title: 'Новости',link: '#'},
  //   {title: 'Криптовалюты', link: '#', iconName:'expand_more',
  //     submenu: [
  //       {title: 'Таблица', link: '#'},
  //       {title: 'Новые обзоры', link: '#'}
  //     ]
  //   },
  //   {title: 'Криптоличности', link: '#', iconName:'expand_more',
  //     submenu: [
  //       {title: 'Обзоры', link: '#'},
  //       {title: 'Криптофонды', link: '#'}
  //     ]
  //   },
  //   {title: 'Биржи', link: '#'},
  //   {title: 'Новичкам', link: '#', iconName:'expand_more',
  //     submenu: [
  //       {title: 'Полезное', link: '#'},
  //       {title: 'Словарь терминов', link: '#'}
  //     ]
  //   },
  //   {title: 'Портфель', link: '#'},
  //   {title: 'More', link: '#', iconName: 'more_vert',
  //     submenu:[
  //       {title: 'ICO', link: '#', iconName: 'dialpad'},
  //       {title: 'Пресс-релизы', link: '#', iconName: 'notifications'}
  //     ]
  //   }
  // ];

  isDark: boolean;
  isLoading = true;

  constructor(private styleManager: StyleManager) {
  }

  ngOnInit() {
    this.isDark = this.styleManager.isDark;
    //if(!!localStorage.getItem('dark-mod')) this.styleManager.toggleDarkTheme();
    setTimeout(()=>{
      this.isLoading = false;
    },200);
  }

  toggleLightTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }

  // addClassToIcon(clickMatMenuTrigger1: MatMenuTrigger): string {
  //   return clickMatMenuTrigger1.menuOpen ? 'rotate-180' : '';
  // }
  //
  // addClassToIconMenU(matMenuTrigger: MatMenuTrigger): string {
  //   return matMenuTrigger.menuOpen? 'rotate-90' : '';
  // }
  //
  // addClassNotLastChild(title: string): string {
  //   return title === 'More'? '' : 'mr-5';
  // }
}
