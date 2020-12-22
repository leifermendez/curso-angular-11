import { TestBed } from '@angular/core/testing';

import { VigilanteDobleGuard } from './vigilante-doble.guard';

describe('VigilanteDobleGuard', () => {
  let guard: VigilanteDobleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteDobleGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
