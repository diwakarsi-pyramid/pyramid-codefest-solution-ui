import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './screens/login/login/login.component';
import { JdProcessingComponent } from './screens/jd-processing/jd-processing/jd-processing.component';
import { ResumeProcessingComponent } from './screens/resume-processing/resume-processing/resume-processing.component';
import { MatchingResumesComponent } from './screens/matching-resumes/matching-resumes/matching-resumes.component';
import { FeedbacksComponent } from './screens/candidate-details/feedbacks/feedbacks.component';
import { AddFeedbackComponent } from './screens/candidate-details/add-feedback/add-feedback.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    JdProcessingComponent,
    ResumeProcessingComponent,
    MatchingResumesComponent,
    FeedbacksComponent,
    AddFeedbackComponent,
    // SidebarComponent,
    // HeaderComponent,
    // FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
