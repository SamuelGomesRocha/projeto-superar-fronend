import { TestBed } from '@angular/core/testing';

import { GeolocalizacaoServiceService } from './geolocalizacao-service.service';

describe('GeolocalizacaoServiceService', () => {
  let service: GeolocalizacaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocalizacaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
