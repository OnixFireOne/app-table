import {Component} from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-bottom-sheet-dialog',
  templateUrl: './bottom-sheet-dialog.component.html',
  styleUrls: ['./bottom-sheet-dialog.component.scss']
})
export class BottomSheetDialogComponent {

  constructor(
    private readonly _bottomSheerRef: MatBottomSheetRef<BottomSheetDialogComponent>
  ) {}

  closeBottomSheet(): void{
    this._bottomSheerRef.dismiss()
  }
}
