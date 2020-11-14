import { Component, OnInit } from '@angular/core';
import { AudioService } from '../../../service/audio.service';
import {Job} from '../../../model/job';
import {JobsService} from '../../../service/jobs/jobs.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
  public jobs: Job[] = [];
  constructor(private audioservice: AudioService,
              private jobsService: JobsService) { }

  ngOnInit(): void {
    this.getLastJobs();
  }


  public getLastJobs(): void {
    this.jobsService.getLastJobs().subscribe(data => {
      this.jobs = data;
    }, ignore => {
      this.jobs = [];
      console.log('error when loading lastJobs'); // TODO: change here by a fancy snack to display error
    });
  }

  public playAudio(audioName, audioToPlay): void {
    this.audioservice.getAudioFile(audioName);
   }

}
