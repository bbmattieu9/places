import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReservedPlacePage } from './reserved-place.page';

describe('ReservedPlacePage', () => {
  let component: ReservedPlacePage;
  let fixture: ComponentFixture<ReservedPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedPlacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservedPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
