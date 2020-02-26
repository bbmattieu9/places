import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  // tslint:disable-next-line: variable-name
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p2',
      userId: 'abc',
      placeTitle: 'Villa Thirty Three',
      guestNumber: 4
    }
  ];

  constructor() { }

  getBookings() {
    return [...this._bookings];
  }
}
