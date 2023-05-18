import {Injectable} from '@angular/core';
import {MatSlideToggleChange} from '@angular/material/slide-toggle';



@Injectable({
  providedIn: 'root'
})
export class SettingsTableService {
 public settingsTable = {
   month: !!(localStorage.getItem('month')),
   year: !!(localStorage.getItem('year'))
 };

  constructor() {}

  set30d1yCheck($event: MatSlideToggleChange){
    let name = $event.source.name;
    $event.checked? localStorage.setItem(name, 'true') : localStorage.removeItem(name);
  }


}
