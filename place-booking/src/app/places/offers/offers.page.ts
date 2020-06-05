import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit, OnDestroy {

  private offersSub: Subscription;
  offers: Place[];

  constructor(private placesService: PlacesService, private router: Router) { }

  onEdit(offerId: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
    console.log('Editing Item with ID :=>', offerId);
  }

  ngOnInit() {
    this.offersSub = this.placesService.places.subscribe(offersArr => {
      this.offers = offersArr;
    });
  }

  ionViewWillEnter() {
    this.placesService.fetchPlaces().subscribe();
  }

  ngOnDestroy(): void {
    if (this.offersSub) {
      this.offersSub.unsubscribe();
    }
  }

}
