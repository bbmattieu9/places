import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PlacesService } from '../../places.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form: FormGroup;

  constructor(private placesSrv: PlacesService,
              private router: Router,
              private authService: AuthService ) { }

   ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required]
      }),
      description: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      dateFrom: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateTo: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
   }

   onCreateOffer() {
     if (!this.form.valid) {
      return;
    }
     this.placesSrv.addPlace(
          Math.random().toString(),
          this.form.value.title,
          this.form.value.description,
          `https://a0.muscache.com/im/pictures/641ae589-dc26-4b25-9a5b-fed0f4bb167f.jpg?aki_policy=xx_large`,
          +this.form.value.price,
          'Lekki',
          new Date(this.form.value.dateFrom),
          new Date(this.form.value.dateTo),
          this.authService.userId
     );
     this.form.reset();
     this.router.navigate(['/places/tabs/offers']);
   }

}
