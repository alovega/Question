import { ProfileComponent } from './profile/profile.component';
import { BadgeComponent } from './badge/badge.component';
import { AddPostComponent } from './add-post/add-post.component';
import { QuestionsComponent } from './questions/questions.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'ask-question', component: AskQuestionComponent},
  {path: 'questions', component: QuestionsComponent},
  {path: 'add-post', component: AddPostComponent},
  {path: 'badges', component: BadgeComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
