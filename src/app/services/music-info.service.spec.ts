import { TestBed } from '@angular/core/testing';

import { MusicInfoService } from './music-info.service';

describe('MusicInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicInfoService = TestBed.get(MusicInfoService);
    expect(service).toBeTruthy();
  });
});
