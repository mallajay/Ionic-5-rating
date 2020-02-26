import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BarRatingComponent } from './bar-rating.component';

describe('BarRatingComponent', () => {
  let component: BarRatingComponent;
  let fixture: ComponentFixture<BarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarRatingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
