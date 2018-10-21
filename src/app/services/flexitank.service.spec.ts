import { TestBed } from '@angular/core/testing';

import { FlexitankService } from './flexitank.service';

describe('FlexitankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlexitankService = TestBed.get(FlexitankService);
    expect(service).toBeTruthy();
  });
});
