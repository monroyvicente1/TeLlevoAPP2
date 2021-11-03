import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TellevoappPageRoutingModule } from './tellevoapp-routing.module';

import { TellevoappPage } from './tellevoapp.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { GeocoderComponent } from 'src/app/components/geocoder/geocoder.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TellevoappPageRoutingModule,
    
  ],
  declarations: [TellevoappPage,
    HeaderComponent,
    FooterComponent,
    GeocoderComponent
  ]
})
export class TellevoappPageModule { }
