import { TestBed } from '@angular/core/testing';

import { JobCategoriesService } from './job-categories.service';

describe('JobCategoriesService', () => {
  let service: JobCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
