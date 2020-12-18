import { TestBed } from '@angular/core/testing';

import { ServicioDeFavoritosService } from './servicio-de-favoritos.service';

describe('ServicioDeFavoritosService', () => {
  let service: ServicioDeFavoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDeFavoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
