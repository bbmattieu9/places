import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AchivedComponent } from './achived.component';

describe('AchivedComponent', () => {
  let component: AchivedComponent;
  let fixture: ComponentFixture<AchivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchivedComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
