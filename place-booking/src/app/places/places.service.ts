import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';


import { Place } from './place.model';



@Injectable({
  providedIn: 'root'
})
export class PlacesService {

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
    return {...this._places.find(p => p.id === id)};
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

    const newPlace = new Place(id, title, description, imageUrl, price, location, dateFrom, dateTo, userId);
    this.places.pipe(take(1)).subscribe(places => {
      this._places.next(places.concat(newPlace));
    });
  }

  constructor() { }
}
