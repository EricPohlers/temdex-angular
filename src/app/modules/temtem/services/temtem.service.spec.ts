import { TestBed } from '@angular/core/testing';

import { TemtemService } from './temtem.service';

describe('TemtemService', () => {
  let service: TemtemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemtemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
