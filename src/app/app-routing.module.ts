import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from './error/error.component';
import {UrlComponent} from './content/table/url/url.component';

const routes: Routes = [
  {path: '', component: UrlComponent},
  {path: 'coin/:id', component: UrlComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
