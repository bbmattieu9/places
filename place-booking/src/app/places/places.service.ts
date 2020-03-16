import { Injectable } from '@angular/core';
import { Place } from './place.model';
import { AuthService } from '../auth/auth.service';

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
      new Date('2020-12-31'),
      'abc'
    ),
    new Place(
      'p2',
      'Villa Thirty Three',
      'In the heart of New York',
      'https://a0.muscache.com/im/pictures/eda5f49a-e792-4b0d-9e71-65359b917d32.jpg?aki_policy=xx_large',
      149.99,
      'Lekki Phase 2',
      new Date('2020-01-01'),
      new Date('2020-12-31'),
      'abc'
    ),
    new Place (
      'p3',
      'L\'Amour Tojours',
      'A romantic place in Paris!',
      'https://www.frenchtoday.com/assets/2018/10/ampfe-free-french-audiobook-chapter06-785x393.jpg',
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
  ];

  get places() {
    return [...this._places];
  }

  getPlaceById(id: string) {
    return {...this._places.find(p => p.id === id)};
  }

  addPlace(title: string, description: string, imageUrl: string, price: number, dateFrom: Date, dateTo: Date) {
    const newPlace =  new Place(
                                Math.random().toString(),
                                title,
                                description,
                                'https://a0.muscache.com/im/pictures/e110da22-05b1-4423-80a0-d7f2033896a9.jpg?aki_policy=xx_large',
                                price,
                                dateFrom,
                                dateTo,
                                this.authService.userId);

    this._places.push(newPlace);
  }

  constructor(private authService: AuthService ) { }
}
