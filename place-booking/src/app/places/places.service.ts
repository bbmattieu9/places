// Angular libraries and packages
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// RxJs
import { BehaviorSubject, Observable } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';

// local imports
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';




@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private authService: AuthService,
              private http: HttpClient) { }

  places$: Observable<Place[]>;

  // tslint:disable-next-line: variable-name
  private _places = new BehaviorSubject<Place[]>([
    new Place (
      'p1',
      'Deluxe 2 bedroom Pool Villa',
      `Mango Tree Villas is complex of three private villas.
      The Deluxe 2 bedroom pool villa, also called Villa Godok
      is our 2 bedroom pool villa, ( master bedroom and twin bedroom) with private pool and garden`,
      'https://a0.muscache.com/im/pictures/59365499/96d38388_original.jpg?aki_policy=x_large',
      85.99,
      'Lekki Phase 1',
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      'Villa Thirty Three',
      `Luxurious private 3bd villa located in the heart of Seminyak. Private swimming pool 2,
      6×8m; built in kitchen; wi-fi internet; within walking distance to cafes, restaurants,
      boutiques, SPA, fitness`,
      'https://a0.muscache.com/im/pictures/66731946/dcd6a0af_original.jpg?aki_policy=x_large',
      149.99,
      'Lekki Phase 2',
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
    new Place (
      'p3',
      'Kealakekua Bay Bali Cottage',
      `This hidden jewel is at Kealakekua Bay.
         Private setting in our lower backyard. Walk to nearby Manini Beach.
       We are located 4 miles down at the bottom of Napoopoo Rd`,
      'https://a0.muscache.com/im/pictures/641ae589-dc26-4b25-9a5b-fed0f4bb167f.jpg?aki_policy=xx_large',
      189.99,
      'Ikeja GRA',
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
    new Place (
      'p4',
      'Lekki Havens',
      'Luxury short stay holiday rental apartments!',
      'https://static.wixstatic.com/media/dfa751_6c177596ff9b4f758fd9f09cfbb65653~mv2.jpg',
      299.99,
      'Banana Island',
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'abc'
    )
  ]);

  get places() {
    return this._places.asObservable();
  }

  getPlaceById(id: string) {
    return this.places.pipe(
      take(1),
      map(places => {
        return {...places.find(p => p.id === id)};
      }),
    );
  }

  fetchPlaces() {
    return this.http.get('https://ionic5-airbnbapp.firebaseio.com/offered-places.json').pipe(
      tap(resData => {
        console.log(resData);
      })
    );
  }

  addPlace(
        id ,
        title,
        description,
        imageUrl,
        price,
        location,
        dateFrom,
        dateTo,
        userId) {
          let generatedId: string;
          const newPlace = new Place(id, title, description, imageUrl, price, location, dateFrom, dateTo, this.authService.userId);
          return this.http.post<{name: string}>('https://ionic5-airbnbapp.firebaseio.com/offered-places.json',
          { ...newPlace, id: null}).pipe(
      switchMap(resData => {
        generatedId = resData.name;
        return this.places;
      }),
      take(1),
      tap(places => {
        newPlace.id = generatedId;
        this._places.next(places.concat(newPlace));
      })
    );
  }

  updatePlace(placeId: string, title: string, description: string) {
    return this.places.pipe(take(1), // return all the places record asObservable
                            delay(1000), // delay it for a sec for spinner to load
                                  tap(places => { // tap into the returned bigObject and filter out the place
                                                  // you wish to update
                                                  // using the Index of the 'wanted' record
            const updatePlaceIndex = places.findIndex(pl => pl.id === placeId);
            const allPlacesArr = [...places];
            const placeToUpdate = allPlacesArr[updatePlaceIndex];
            allPlacesArr[updatePlaceIndex] = new Place(
              placeToUpdate.id,
              title,
              description,
              placeToUpdate.imageUrl,
              placeToUpdate.price,
              placeToUpdate.location,
              placeToUpdate.availableFrom,
              placeToUpdate.availableTo,
              placeToUpdate.userId
            );
            this._places.next(allPlacesArr);
    }));
  }

  deletePlaceById(placeId: string) {
    return this.places.pipe(take(1), // return all the places record asObservable but take (1)
                            delay(1000), // delay it for a sec for spinner to load
                                  tap(places => { // tap into the returned bigObject and filter out the place
                                                  // you wish to update
                                                  // using the Index of the 'wanted' record
            const placeToDelete = placeId;
            const placesAfterDeleteOne = places.filter(aPlace => aPlace !== placeToDelete);
            this._places.next(placesAfterDeleteOne);
    }));
  }

}
