import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeolocalizationComponent } from './geolocalization.component';

describe('GeolocalizationComponent', () => {
  let component: GeolocalizationComponent;
  let fixture: ComponentFixture<GeolocalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeolocalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeolocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
