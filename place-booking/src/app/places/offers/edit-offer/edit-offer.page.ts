import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  place: Place;
  editNewOfferform: FormGroup;

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private placesSrv: PlacesService) { }

  onUpdateOffer() {
    if (!this.editNewOfferform.valid) {
      return;
    }
   }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        return this.navCtrl.navigateBack('places/tabs/offers');
      }
      this.place = this.placesSrv.getPlaceById(paramMap.get('placeId'));
      this.editNewOfferform = new FormGroup({
        title: new FormControl(this.place.title, {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
        description: new FormControl(this.place.description, {
          updateOn: 'blur',
          validators: [Validators.required, Validators.maxLength(180)]
        })
      });
    });
  }



}
