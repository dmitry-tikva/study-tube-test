import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LearningsService } from './learnings.service';

describe('LearningsService', () => {
  let service: LearningsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearningsService, HttpClient, HttpHandler],
    });
    service = TestBed.inject(LearningsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
