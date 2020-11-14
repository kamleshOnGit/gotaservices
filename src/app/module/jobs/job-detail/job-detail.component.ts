import { Component, OnInit } from '@angular/core';
import { Job } from '../../../model/job';
import { JobsService } from '../../../service/jobs/jobs.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  model: any;
  constructor(private readonly jobService: JobsService) { }

  ngOnInit(): void {
    this.getJob();
  }

  // tslint:disable-next-line: typedef
  getJob() {
    this.model = this.jobService.getJob(1);
  }

}
