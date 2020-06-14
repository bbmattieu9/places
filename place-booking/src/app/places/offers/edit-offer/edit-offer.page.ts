import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit, OnDestroy {

  place: Place;
  private placeSub: Subscription;
  editNewOfferform: FormGroup;
  isLoading = false;
  placeId: string;

  constructor(private route: ActivatedRoute,
              private navCtrl: NavController,
              private placesSrv: PlacesService,
              private router: Router,
              private loadingCtrl: LoadingController) { }

  onUpdateOffer() {
    if (!this.editNewOfferform.valid) {
      return;
    }
    this.loadingCtrl.create({
      message: 'Updating Place...'
    }).then(loadingEl => {
        loadingEl.present();
        this.placesSrv.updatePlace(
        this.place.id,
        this.editNewOfferform.value.title,
        this.editNewOfferform.value.description
        ).subscribe(() => {
          loadingEl.dismiss();
          this.editNewOfferform.reset();
          this.router.navigate(['/places/tabs/offers']);
        });
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        return this.navCtrl.navigateBack('places/tabs/offers');
      }

      this.placeId = paramMap.get('placeId');
      this.isLoading = true;
      this.placeSub = this.placesSrv.getPlaceById(paramMap.get('placeId')).subscribe(singlePlace => {
        this.place = singlePlace;
        this.editNewOfferform = new FormGroup({
          title: new FormControl(this.place.title, {
            updateOn: 'blur',
            validators: [Validators.required]
          }),
          description: new FormControl(this.place.description, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(500)]
          })
        });
        this.isLoading = false;
      });
    });
  }

  ngOnDestroy(): void {
    if (this.placeSub) {
      this.placeSub.unsubscribe();
    }
  }

}
