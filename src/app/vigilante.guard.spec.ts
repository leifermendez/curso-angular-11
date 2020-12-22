import { TestBed } from '@angular/core/testing';

import { VigilanteGuard } from './vigilante.guard';

describe('VigilanteGuard', () => {
  let guard: VigilanteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VigilanteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
