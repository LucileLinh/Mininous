import { TestBed, inject } from '@angular/core/testing';

import { MemoryGameService } from './memory-game.service';

describe('MemoryGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemoryGameService]
    });
  });

  it('should be created', inject([MemoryGameService], (service: MemoryGameService) => {
    expect(service).toBeTruthy();
  }));
});
