import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';

import {SegmentChangeEventDetail} from '@ionic/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {

  loadedPlaces: Place[];
  relavantPlaces: Place[];
  listedLoadedPlaces: Place[];
  private placeSub: Subscription;
  isLoading = false;

  constructor(private placesService: PlacesService,
              private menuCtrl: MenuController,
              private authSrv: AuthService) { }


  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail);
    if (event.detail.value === 'all') {
      this.relavantPlaces = this.loadedPlaces;
      this.listedLoadedPlaces = this.relavantPlaces.slice(1);
    } else {
      this.relavantPlaces = this.loadedPlaces.filter(
        place => place.userId !== this.authSrv.userId);
      this.listedLoadedPlaces = this.relavantPlaces.slice(1);
    }

   }

  //  onOpenMenu() {
  //    this.menuCtrl.toggle();
  //  }

  ngOnInit() {
    this.placeSub = this.placesService.places.subscribe(places => {
      this.relavantPlaces = places;
      this.loadedPlaces = places;
    });
  }

  ionViewWillEnter() {
    this.isLoading = true;
    this.placesService.fetchPlaces().subscribe(() => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
     if (this.placeSub) {
       this.placeSub.unsubscribe();
     }
  }

}
