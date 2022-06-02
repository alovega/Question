import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TagInputModule } from 'ngx-chips';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import { MAT_RIPPLE_GLOBAL_OPTIONS} from '@angular/material/core';
import { AppGlobalRippleOptions } from './app-global-ripple-options.service';
import { FooterComponent } from './footer/footer.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { QuestionsComponent } from './questions/questions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AddPostComponent } from './add-post/add-post.component';
import { BadgeComponent } from './badge/badge.component';
import { CardComponent } from './card/card.component';
import { QuestionTableComponent } from './question-table/question-table.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { AnalyticsComponent } from './analytics/analytics.component';


@NgModule({
  declarations: [	
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AskQuestionComponent,
    QuestionsComponent,
    ContactUsComponent,
    HomeComponent,
    AddPostComponent,
    BadgeComponent,
    CardComponent,
    QuestionTableComponent,
    LoginComponent,
    ProfileComponent,
    AnalyticsComponent
   ],
  imports:[
    TagInputModule,
    LMarkdownEditorModule,
    NgxDatatableModule,
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule,
    MatMenuModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: AppGlobalRippleOptions}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
