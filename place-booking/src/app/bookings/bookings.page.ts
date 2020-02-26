import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';


import { BookingService } from './create-booking/booking.service';
import { Booking } from './create-booking/booking.model';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[];

  constructor(private bookingsSrv: BookingService) { }

  onCancelBooking(offerId: string, slidingEl: IonItemSliding) { 
    slidingEl.close();
    // Cancel booking with offerId
  }

  ngOnInit() {
    this.loadedBookings = this.bookingsSrv.getBookings();
  }

}
