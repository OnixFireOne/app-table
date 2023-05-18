import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DialogContentCoinDialogComponent} from '../../dialog/dialog-content-coin-dialog/dialog-content-coin-dialog.component';

@Component({
  selector: 'app-dialog-content-coin',
  templateUrl: './dialog-content-coin.component.html',
  styleUrls: ['./dialog-content-coin.component.scss']
})
export class DialogContentCoinComponent {
  constructor(public dialog: MatDialog) { }

  openCoinContentDialog(): MatDialogRef<DialogContentCoinDialogComponent>{
    return this.dialog.open(DialogContentCoinDialogComponent);
  }
}

