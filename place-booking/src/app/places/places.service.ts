import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place (
      'p1',
      'Nordoy Pinky Palace',
      'Not your average city trip!',
      'https://www.israel21c.org/wp-content/uploads/2019/01/UM_TLV241-1168x657.jpg',
      299.99
    ),
    new Place(
      'p2',
      'Manhattan Mansion',
      'In the heart of New York',
      'https://m1.cbhomes.com/p/734/SB19160120/67820f4eC6f0460/pds23tp.jpg',
      149.99
    ),
    new Place (
      'p3',
      'L\'Amour Tojours',
      'A romantic place in Paris!',
      'https://www.frenchtoday.com/assets/2018/10/ampfe-free-french-audiobook-chapter06-785x393.jpg',
      189.99
    ),
    new Place (
      'p4',
      'Habtoor Palace',
      'Luxury living at its peak in the heart of Dubai!',
      'https://lxrhotels3.hilton.com/lxr/wp-content/uploads/2019/06/habtoor-palace-dusk-1920x959-580x742.jpg',
      299.99
    )
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
