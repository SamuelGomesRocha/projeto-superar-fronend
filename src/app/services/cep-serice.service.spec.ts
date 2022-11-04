import { TestBed } from '@angular/core/testing';

import { CepSericeService } from './cep-serice.service';

describe('CepSericeService', () => {
  let service: CepSericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CepSericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
