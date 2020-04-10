import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-reserved-place',
  templateUrl: './reserved-place.page.html',
  styleUrls: ['./reserved-place.page.scss'],
})
export class ReservedPlacePage implements OnInit, OnDestroy {

  constructor() { }


  ngOnDestroy(): void {
    throw new Error(`OnDestroy Called!`);
  }

  ngOnInit() {
  }

}
