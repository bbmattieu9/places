import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservedPlacePageRoutingModule } from './reserved-place-routing.module';

import { ReservedPlacePage } from './reserved-place.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservedPlacePageRoutingModule
  ],
  declarations: [ReservedPlacePage]
})
export class ReservedPlacePageModule {}
