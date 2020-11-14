import { Component, OnInit } from '@angular/core';
import {JobCategoriesService} from '../../../service/jobCategories/job-categories.service';
import { AudioService } from '../../../service/audio.service';
import {JobCategory} from '../../../model/jobCategory';


@Component({
  selector: 'app-job-category-temp',
  templateUrl: './job-category-temp.component.html',
  styleUrls: ['./job-category-temp.component.css']
})
export class JobCategoryTempComponent implements OnInit {

  
  public jobCategories: JobCategory[] = [];
  constructor(private audioservice: AudioService ,  private jobCategoriesService: JobCategoriesService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories(): void {
    this.jobCategoriesService.getJobCategories().subscribe(data => {
      this.jobCategories = data;
    }, ignore => {
      this.jobCategories = [];
      console.log('error when loading jobCategories'); // TODO: change here by a fancy snack to display error
    });
  }

  public playAudio(audioName, audioToPlay): void {
    this.audioservice.getAudioFile(audioName);
   }

}
