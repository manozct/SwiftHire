import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostjobComponent } from './components/postjob/postjob.component';
import { PostsComponent } from './components/posts/posts.component';
import { JoblistComponent } from './components/joblist/joblist.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import {DataService} from './services/data.service';
import {AuthService} from './services/auth.service';
import {MyRoutesModule} from './app.routes';
import {MaterialModule} from '@angular/material';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    PostjobComponent,
    PostsComponent,
    JoblistComponent,
    ProfileComponent,
    HomepageComponent

  ],
  imports: [
    BrowserModule,
    MyRoutesModule,
    BrowserAnimationsModule,
    MaterialModule


  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
