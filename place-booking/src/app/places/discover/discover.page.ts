import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

import {SegmentChangeEventDetail} from '@ionic/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {

  loadedPlaces: Place[];
  private placeSub: Subscription;

  constructor(private placesService: PlacesService,
              private menuCtrl: MenuController) { }


  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
   }

  //  onOpenMenu() {
  //    this.menuCtrl.toggle();
  //  }

  ngOnInit() {
    this.placeSub = this.placesService.places.subscribe(places => {
      this.loadedPlaces = places;
    });
  }

  ngOnDestroy() {
     if (this.placeSub) {
       this.placeSub.unsubscribe();
     }
  }

}
