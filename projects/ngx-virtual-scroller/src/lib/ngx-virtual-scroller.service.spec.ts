import { TestBed } from '@angular/core/testing';

import { NgxVirtualScrollerService } from './ngx-virtual-scroller.service';

describe('NgxVirtualScrollerService', () => {
  let service: NgxVirtualScrollerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxVirtualScrollerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
