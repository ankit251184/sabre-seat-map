import { TestBed } from '@angular/core/testing';

import { SabreSeatMapLibService } from './sabre-seat-map-lib.service';

describe('SabreSeatMapLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SabreSeatMapLibService = TestBed.get(SabreSeatMapLibService);
    expect(service).toBeTruthy();
  });
});
