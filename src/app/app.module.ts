import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './module/homepage/homepage.component';
import { LoginComponent } from './module/login/login.component';
import { JobsComponent } from './module/jobs/jobs.component';
import { JobDetailComponent } from './module/jobs/job-detail/job-detail.component';
import { JobApplicationComponent } from './module/jobs/job-application/job-application.component';
import { JobFavoriteComponent } from './module/jobs/job-favorite/job-favorite.component';
import { CvCreateComponent } from './module/cv-create/cv-create.component';
import { JobAddComponent } from './module/jobs/job-add/job-add.component';
import { JobCategoryComponent } from './module/jobs/job-category/job-category.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSliderModule} from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './module/header/header.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FooterComponent } from './module/footer/footer.component';
import {ScrollDispatcher, ScrollingModule} from '@angular/cdk/scrolling';
import { LayoutModule } from '@angular/cdk/layout';
import { AudioPlayerComponent } from './module/audio-player/audio-player.component';
import { JobCategoryTempComponent } from './module/homepage/job-category-temp/job-category-temp.component';
import { JobListingComponent } from './module/homepage/job-listing/job-listing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    JobsComponent,
    JobDetailComponent,
    JobApplicationComponent,
    JobFavoriteComponent,
    CvCreateComponent,
    JobAddComponent,
    JobCategoryComponent,
    HeaderComponent,
    FooterComponent,
    AudioPlayerComponent,
    JobCategoryTempComponent,
    JobListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonToggleModule,
    FlexLayoutModule,
    MatSidenavModule,
    ScrollingModule,
    LayoutModule,
    MatSliderModule,
    MatListModule
  ],
  providers: [ScrollDispatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
