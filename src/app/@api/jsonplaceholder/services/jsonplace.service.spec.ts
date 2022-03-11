/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JsonplaceService } from './jsonplace.service';

describe('Service: Jsonplace', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonplaceService]
    });
  });

  it('should ...', inject([JsonplaceService], (service: JsonplaceService) => {
    expect(service).toBeTruthy();
  }));
});
