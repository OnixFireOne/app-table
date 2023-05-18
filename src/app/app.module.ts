import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MenuComponent } from './header/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import { TableComponent } from './content/table/table.component';
import { AddComponentDirective } from './directive/add-component.directive';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from '@angular/common/http';
import {MatLineModule, MatRippleModule} from '@angular/material/core';
import localeRu from '@angular/common/locales/ru';
import {DecimalPipe, registerLocaleData} from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {
  DialogContentCoinComponent,
} from './content/table/dialog-content-coin/dialog-content-coin.component';
import { DialogContentCoinDialogComponent } from './content/dialog/dialog-content-coin-dialog/dialog-content-coin-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import { DrawerSlidRefDirective } from './directive/drawer-slid-ref.directive';
import { BaseDestroyDirective } from './directive/base-destroy.directive';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { SidenavEndComponent } from './sidenav/sidenav-end/sidenav-end.component';
import { FooterComponent } from './content/footer/footer.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { UrlComponent } from './content/table/url/url.component';
import { ErrorComponent } from './error/error.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
//import { TablePageComponent } from './page/table-page/table-page.component';




registerLocaleData(localeRu,'fr')

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    MenuComponent,
    TableComponent,
    AddComponentDirective,
    DialogContentCoinComponent,
    DialogContentCoinDialogComponent,
    DrawerSlidRefDirective,
    BaseDestroyDirective,
    SidenavEndComponent,
    FooterComponent,
    UrlComponent,
    ErrorComponent,
    //TablePageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    MatRippleModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatBadgeModule,
    MatLineModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,

  ],
  providers: [DecimalPipe, MatDrawer, MatSnackBar,
    {
      provide: LOCALE_ID,
      useValue: 'fr'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
