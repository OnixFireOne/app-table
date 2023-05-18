import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentCoinDialogComponent } from './dialog-content-coin-dialog.component';

describe('DialogContentCoinDialogComponent', () => {
  let component: DialogContentCoinDialogComponent;
  let fixture: ComponentFixture<DialogContentCoinDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentCoinDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContentCoinDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
