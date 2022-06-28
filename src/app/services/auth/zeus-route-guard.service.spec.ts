import { TestBed } from '@angular/core/testing';

import { ZeusRouteGuardService } from './zeus-route-guard.service';

describe('ZeusRouteGuardService', () => {
  let service: ZeusRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZeusRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
