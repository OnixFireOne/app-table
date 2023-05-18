import {Component} from '@angular/core';
import {SettingsTableService} from '../service/settings-table.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  constructor( public settingsTableService: SettingsTableService) {}


  settingCheck() {
    if(this.settingsTableService.settingsTable.month && this.settingsTableService.settingsTable.year){
      return 'md:max-w-6xl'
    }
    if(this.settingsTableService.settingsTable.month || this.settingsTableService.settingsTable.year){
      return 'md:max-w-5xl'
    }
    return 'md:max-w-4xl';
  }
}
