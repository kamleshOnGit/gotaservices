import {User} from './user';
import {Job} from './job';

export class JobApplied {
  public id: number;
  public user: User;
  public job: Job;
  public score: number;
}
