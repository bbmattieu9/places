import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonItemSliding, LoadingController } from '@ionic/angular';


import { BookingService } from './create-booking/booking.service';
import { Booking } from './create-booking/booking.model';
import { Subscribable, Subscription } from 'rxjs';


@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit, OnDestroy {

  loadedBookings: Booking[];
  private bookingsSub: Subscription;

  constructor(private bookingsSrv: BookingService,
              private loadingCtrl: LoadingController) { }

  onCancelBooking(bookingId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.loadingCtrl.create({message: 'Cancelling...'}).then(loadingEl => {
      loadingEl.present();
      this.bookingsSrv.cancelBooking(bookingId).subscribe(() => {
        loadingEl.dismiss();
      });
    });
  }

  ngOnInit() {
    this.bookingsSub = this.bookingsSrv.getBookings().subscribe(bookings => {
      this.loadedBookings = bookings;
    });
  }

  ngOnDestroy(): void {
    if (this.bookingsSub) {
      this.bookingsSub.unsubscribe();
    }
  }

}
