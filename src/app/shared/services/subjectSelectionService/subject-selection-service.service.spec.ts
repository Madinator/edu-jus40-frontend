import { TestBed } from '@angular/core/testing';

import { SubjectSelectionServiceService } from './subject-selection-service.service';

describe('SubjectSelectionServiceService', () => {
  let service: SubjectSelectionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectSelectionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
