import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';

  constructor(private modalCtrl: ModalController) { }

  onCancel() {
    this.modalCtrl.dismiss(null, 'Cancel');
  }

  onBookPlace() {
    this.modalCtrl.dismiss({message: 'This is a dummy message'}, 'confirm');
  }


  ngOnInit() {}

}
