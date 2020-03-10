import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  // tslint:disable-next-line: variable-name
  private _places: Place[] = [
    new Place (
      'p1',
      'Vdara\'s Place',
      'Clean & stylish 2Bedroom duplex',
      'https://a0.muscache.com/im/pictures/e110da22-05b1-4423-80a0-d7f2033896a9.jpg?aki_policy=xx_large',
      85.99,
      'Lekki Phase 1',
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
    new Place(
      'p2',
      'Villa Thirty Three',
      'In the heart of New York',
      'https://a0.muscache.com/im/pictures/eda5f49a-e792-4b0d-9e71-65359b917d32.jpg?aki_policy=xx_large',
      149.99,
      'Lekki Phase 2',
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
    new Place (
      'p3',
      'L\'Amour Tojours',
      'A romantic place in Paris!',
      'https://www.frenchtoday.com/assets/2018/10/ampfe-free-french-audiobook-chapter06-785x393.jpg',
      189.99,
      'Ikeja GRA',
      new Date('2020-01-01'),
      new Date('2020-12-31')
    ),
    new Place (
      'p4',
      'Habtoor Palace',
      'Luxury living at its peak in the heart of Dubai!',
      'https://lxrhotels3.hilton.com/lxr/wp-content/uploads/2020/06/habtoor-palace-dusk-1920x959-580x742.jpg',
      299.99,
      'Banana Island',
      new Date('2020-01-01'),
      new Date('2020-12-31')
    )
  ];

  get places() {
    return [...this._places];
  }

  getPlaceById(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  constructor() { }
}
