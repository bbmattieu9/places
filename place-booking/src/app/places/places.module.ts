import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PlacesPageRoutingModule } from './places-routing.module';

import { PlacesPage } from './places.page';
import { TesterPipe } from './tester.pipe';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    PlacesPageRoutingModule
  ],
  declarations: [PlacesPage, TesterPipe]
})
export class PlacesPageModule {}
