import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Company} from '../../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl: any;

  constructor(
    private http: HttpClient
  ) {
    this.apiUrl = environment.backendApiUrl;
  }

  /**
   * get company details
   */
  public getCompany(): Observable<Company> {
    return this.http.get<Company>(this.apiUrl + '/company');
  }
}
