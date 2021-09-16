import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecoverpwPageRoutingModule } from './recoverpw-routing.module';

import { RecoverpwPage } from './recoverpw.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecoverpwPageRoutingModule
  ],
  declarations: [RecoverpwPage, 
    HeaderComponent,
    FooterComponent]
})
export class RecoverpwPageModule { }
