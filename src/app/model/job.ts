import {JobCategory} from './jobCategory';
import {Company} from './company';
import {JobType} from './jobType';

export class Job {
  public id: number;
  public name: string;
  public image: string;
  public audio: string;
  public jobCategory: JobCategory;
  public jobType: JobType;
  // public jobTime: JobTime; // partial or not
  public company: Company;
  public salary: number;
  public profile: string;
  public mission: string;
  public address: string;
  public view: number;
  public createdAt: Date;
  public updatedAt: Date;
}
