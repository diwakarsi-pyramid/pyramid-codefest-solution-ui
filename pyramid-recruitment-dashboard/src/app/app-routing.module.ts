import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFeedbackComponent } from './screens/candidate-details/add-feedback/add-feedback.component';
import { FeedbacksComponent } from './screens/candidate-details/feedbacks/feedbacks.component';
import { JdProcessingComponent } from './screens/jd-processing/jd-processing/jd-processing.component';
import { MatchingResumesComponent } from './screens/matching-resumes/matching-resumes/matching-resumes.component';
import { ResumeProcessingComponent } from './screens/resume-processing/resume-processing/resume-processing.component';

const routes: Routes =[
  {
    path: 'jd-processing',
    component: JdProcessingComponent
  },
  {
    path: 'resume-processing',
    component: ResumeProcessingComponent
  },
  {
    path: 'matching-resumes',
    component: MatchingResumesComponent
  },
  {
    path: 'feedbacks',
    component: FeedbacksComponent
  },
  {
    path: 'feedbacks/add',
    component: AddFeedbackComponent
  },
  {
    path: '',
    redirectTo: 'jd-processing',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forRoot(routes,{
    useHash: true
 })],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
  
}
