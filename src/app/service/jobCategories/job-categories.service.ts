import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, of} from 'rxjs';
import {JobCategory} from '../../model/jobCategory';
import {Job} from '../../model/job';

@Injectable({
  providedIn: 'root'
})
export class JobCategoriesService {
  private apiUrl: any;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.backendApiUrl;
  }

  public getJobCategories(): Observable<JobCategory[]> {
    // return this.http.get<JobCategory[]>(this.apiUrl + '/jobCategories');
    const jobCategories = [
      {
        id: 1,
        name: 'Nettoyage',
        nameEn: 'Cleaning',
        image: 'category_nettoyage',
        domain: 'D',
        audio: 'assets/audio/category-nettoyage.mp3',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      },
      {
        id: 2,
        name: 'BTP',
        nameEn: 'Cleaning',
        image: 'category_btp',
        domain: 'D',
        audio: 'assets/audio/category-btp.mp3',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      },
      {
        id: 3,
        name: 'Restauration',
        nameEn: 'Cleaning',
        image: 'category_restauration',
        domain: 'D',
        audio: 'assets/audio/category-restauration.mp3',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      },
      {
        id: 4,
        name: 'Commerce',
        nameEn: 'Cleaning',
        image: 'category_tourisme',
        domain: 'D',
        audio: 'assets/audio/category-commerce.mp3',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      },
      {
        id: 5,
        name: 'Logistique',
        nameEn: 'Cleaning',
        image: 'category_logistique',
        domain: 'D',
        audio: 'assets/audio/category-logistique.mp3',
        createdAt: new Date(2020, 7, 20),
        updatedAt: new Date(2020, 7, 20)
      }
    ];
    return of(jobCategories);
  }
}
