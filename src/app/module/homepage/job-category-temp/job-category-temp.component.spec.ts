import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCategoryTempComponent } from './job-category-temp.component';

describe('JobCategoryTempComponent', () => {
  let component: JobCategoryTempComponent;
  let fixture: ComponentFixture<JobCategoryTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobCategoryTempComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCategoryTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
