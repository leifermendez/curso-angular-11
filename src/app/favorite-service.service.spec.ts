import { TestBed } from '@angular/core/testing';

import { FavoriteServiceService } from './favorite-service.service';

describe('FavoriteServiceService', () => {
  let service: FavoriteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
