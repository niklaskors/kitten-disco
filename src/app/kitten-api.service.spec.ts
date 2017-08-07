import { TestBed, inject } from '@angular/core/testing';

import { KittenApiService } from './kitten-api.service';

describe('KittenApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KittenApiService]
    });
  });

  it('should be created', inject([KittenApiService], (service: KittenApiService) => {
    expect(service).toBeTruthy();
  }));
});
