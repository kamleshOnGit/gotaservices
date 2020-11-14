import { Component, OnInit  } from '@angular/core';
import {JobCategory} from '../../model/jobCategory';
import { AudioService } from '../../service/audio.service';
import {Job} from '../../model/job';
import {JobsService} from '../../service/jobs/jobs.service';
import {JobCategoriesService} from '../../service/jobCategories/job-categories.service';
import {AudioPlayerComponent } from '../audio-player/audio-player.component';
import {AudioStructure} from '../../model/audio-struture';
import {JobCategoryTempComponent} from './job-category-temp/job-category-temp.component';
import {JobListingComponent} from './job-listing/job-listing.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit   {

  public jobCategories: JobCategory[] = [];
  public jobs: Job[] = [];
  constructor(private audioservice: AudioService,
              private jobsService: JobsService,
              private jobCategoriesService: JobCategoriesService,
  ) {}
  ngOnInit(): void {
    this.getLastJobs();
    this.getCategories();
    // this.msaapPlaylist = []
  }
  public getCategories() {
    this.jobCategoriesService.getJobCategories().subscribe(data => {
      this.jobCategories = data;
    }, ignore => {
      this.jobCategories = [];
      console.log('error when loading jobCategories'); // TODO: change here by a fancy snack to display error
    });
  }

  public getLastJobs() {
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
