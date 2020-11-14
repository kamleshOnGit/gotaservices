import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './module/homepage/homepage.component';
import {LoginComponent} from './module/login/login.component';
import {JobsComponent} from './module/jobs/jobs.component';
import {JobDetailComponent} from './module/jobs/job-detail/job-detail.component';
import {JobApplicationComponent} from './module/jobs/job-application/job-application.component';
import {JobFavoriteComponent} from './module/jobs/job-favorite/job-favorite.component';
import {CvCreateComponent} from './module/cv-create/cv-create.component';
import {JobAddComponent} from './module/jobs/job-add/job-add.component';
import {JobCategoryComponent} from './module/jobs/job-category/job-category.component';
import {HeaderComponent} from './module/header/header.component';

const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        component: HomepageComponent,
      },
      {
        path: 'job',
        component: JobsComponent,
      },
      {
        path: 'job-add',
        component: JobAddComponent,
      },
      {
        path: 'job/:job_id',
        component: JobDetailComponent,
      },
      {
        path: 'job-application/:job_id',
        component: JobApplicationComponent,
      },
      {
        path: 'job-favorite',
        component: JobFavoriteComponent,
      },
      {
        path: 'job-category/:job_category_id',
        component: JobCategoryComponent,
      },
      {
        path: 'cv-create',
        component: CvCreateComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
