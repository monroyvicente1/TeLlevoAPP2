import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TellevoappPage } from './tellevoapp.page';

const routes: Routes = [
  {
    path: '',
    component: TellevoappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TellevoappPageRoutingModule {}
