import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentCoinComponent } from './dialog-content-coin.component';

describe('DialogContentCoinComponent', () => {
  let component: DialogContentCoinComponent;
  let fixture: ComponentFixture<DialogContentCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogContentCoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogContentCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
