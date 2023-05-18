import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, AfterViewInit{

  constructor(
    private readonly _snackBar: MatSnackBar
  ) {}

  ngOnInit() {

  }

  ngAfterViewInit() {
    this._snackBar.open('Page not founded', 'OK',{
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }

}
